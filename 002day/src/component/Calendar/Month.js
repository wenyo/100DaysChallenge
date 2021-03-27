import React from 'react';
import WeekDay from './WeekDay';
import Date from './Date';
import moment from 'moment';

const Month = ({ month }) => {
    const sMonth = moment(`2021-${month}`).format('MMMM');
    return (
        <div>
            <h3>{sMonth}</h3>
            <WeekDay />
            <Date month={month} />
        </div>
    );
};

export default Month;
