import React from 'react';
import Month from './Month';

class Calendar extends React.Component {

    render() {
        return (
            <>
                {
                    Array.from(Array(12)).map((x, idx)=>(
                        <Month key={idx} month={idx+1} />
                    ))
                }
            </>
        );
    }
}

export default Calendar;
