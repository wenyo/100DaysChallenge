import React from 'react';
import { WEEKDAY } from '../../utils/Info';

const WeekDay = () => {
    return (
        <div className="week">
            {WEEKDAY.map((day) => (
                <div key={day}>{day}</div>
            ))}
        </div>
    );
};

export default WeekDay;
