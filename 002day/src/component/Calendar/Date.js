import React from 'react';
import context from '../../context/Context';
import moment from 'moment';
import DateItem from './DateItem';
class Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iDay: 0,
            iDateNum: 0,
            month: props.month,
        };
    }

    static contextType = context;

    componentDidMount() {
        this.getFirstWeekDay();
        this.getMonthDate();
    }

    getFirstWeekDay() {
        const date = `${this.context.sNowYear}/${this.state.month}/1`;
        const iDay = moment(date, "YYYY/MM/DD").day();
        this.setState({
            iDay: iDay,
        });
    }

    getMonthDate() {
        const date = `${this.context.sNowYear}/${this.state.month}/1`;
        let iDateNum = moment(date, "YYYY/MM/DD").add('1', 'month').subtract('1', 'days').date();
        this.setState({
            iDateNum: iDateNum,
        });
    }

    render() {
        const { iDay, iDateNum } = this.state;
        return (
            <div className="date">
                {Array.from(Array(iDay)).map((x, idx) => {
                    return <div key={idx}></div>;
                })}
                {Array.from(Array(iDateNum)).map((x, idx) => {
                    return <DateItem key={idx + 1} date={idx + 1} />;
                })}
            </div>
        );
    }
}

export default Date;
