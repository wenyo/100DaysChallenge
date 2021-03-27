import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICON_INFO } from '../../utils/Info';
import context from '../../context/Context';

class Mode extends React.Component {

    static contextType = context;

    render() {
        return (
            <ul id="Mode">
                {ICON_INFO.map((icon, idx) => {
                    const { className, component } = icon;
                    const { setiModeIdx } = this.context;
                    return (
                        <li className={className} key={className} onClick={() => setiModeIdx(idx)}>
                            <FontAwesomeIcon icon={component} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default Mode;
