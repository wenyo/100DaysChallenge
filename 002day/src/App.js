import React, { useContext, useState } from 'react';
import Context, { Provider } from './context/Context';
import Intro from './component/Intro';
import Mode from './component/Mode';
import Calendar from './component/Calendar';

function App() {
    // context
    const context = useContext(Context);

    // state
    const [iModeIdx, setiModeIdx] = useState(0);
    
    const vNewContext = {
        ...context,
        iModeIdx,
        setiModeIdx,
    };

    return (
        <Provider value={vNewContext}>
            <div id="App">
                <Intro />
                <Mode />
                <Calendar />
            </div>
        </Provider>
    );
}

export default App;
