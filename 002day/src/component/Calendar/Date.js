import React from 'react';
import context from '../../context/Context';

class Date extends React.Component {
    constructor(props) {
        super();
    }

    static contextType = context;

    render() {
        return <div>{this.props.month}{this.context.sNowYear}</div>;
    }
}

export default Date;
