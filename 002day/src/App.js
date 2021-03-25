import React, {useContext} from 'react';
import Context,{ Provider } from './context/Context';
import Intro from './component/Intro';
import Mode from './component/Mode';
import Calendar from './component/Calendar';

function App() {
    const context = useContext(Context)
    console.log(context)
    return (
        <Provider value={context}>
            <div className="App">
                <Intro />
                <Mode />
                <Calendar />
            </div>
        </Provider>
    );
}

export default App;
