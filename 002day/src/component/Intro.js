import React, { useContext } from 'react';
import Context from '../context/Context';

const Intro = () => {
    const { sNowYear } = useContext(Context);

    return (
        <div className="Intro">
            <h1>{sNowYear} Mode Calendar</h1>
            <ul>
                <li>choese mode first</li>
                <li>choese date and mark it</li>
            </ul>
        </div>
    );
};

export default Intro;
