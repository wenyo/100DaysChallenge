import React from 'react';
import { WEEKDAY } from '../../utils/Info';

const WeekDay = () => {
    return (
        <div>
            {WEEKDAY.map((day) => (
                <span key={day}>{day}</span>
            ))}
        </div>
    );
};

export default WeekDay;
