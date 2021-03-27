import React, { useState, useContext } from 'react';
import context from '../../context/Context';
import { ICON_INFO } from '../../utils/Info';

const DateItem = ({ date }) => {
    const { iModeIdx } = useContext(context);
    const [sClassName, setsClassName] = useState('');

    const markMode = () => {
        if (iModeIdx === -1) return;
        setsClassName(ICON_INFO[iModeIdx].className);
    };

    return (
        <span onClick={markMode} className={sClassName}>
            {date}
        </span>
    );
};
export default DateItem;
