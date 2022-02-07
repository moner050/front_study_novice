import React, { Component } from 'react';
import SkipComponent from './SkipComponent';
import WrapComponent from './WrapComponent';

class App extends Component {
    render() {
        return (
            <>
                <SkipComponent />
                <WrapComponent />
            </>
        );
    }
}


export default App;