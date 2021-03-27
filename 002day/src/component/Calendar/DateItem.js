import React, { useState, useContext } from 'react';
import context from '../../context/Context';
import { ICON_INFO } from '../../utils/Info';

const DateItem = ({ date }) => {
    const { iModeIdx } = useContext(context);
    const [sClassName, setsClassName] = useState('');

    const markMode = () => {
        if (iModeIdx === -1) return;
        setsClassName(ICON_INFO[iModeIdx].className2);
    };

    return (
        <div onClick={markMode} >
            <span className={`date_item ${sClassName}`}>{date}</span>
        </div>
    );
};
export default DateItem;
