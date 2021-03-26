import React from 'react';
import WeekDay from './WeekDay';
import Date from './Date';

const Month = ({ month }) => {
    return (
        <>
            <WeekDay />
            <Date month={month} />
        </>
    );
};

export default Month;
