import React from 'react';
import Month from './Month';

class Calendar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                {
                    Array.from(Array(12)).map((x, idx)=>(
                        <Month month={idx+1} />
                    ))
                }
            </>
        );
    }
}

export default Calendar;
