import React from 'react';
import Month from './Month';

class Calendar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Month month={1} />
            </>
        );
    }
}

export default Calendar;
