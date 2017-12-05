import React, {Component} from 'react';
import Collapsible from './Collapsible';
import ListData from './ListData';
import EMap from './map/MapWrapper';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">

                <Collapsible title="List title" data={ListData}/>
                <EMap/>
            </div>
        );
    }
}

export default App;


/**
 * import logo from './logo.svg';
 *
 * <header className="App-header">
 <img src={logo} className="App-logo" alt="logo"/>
 <h1 className="App-title">Welcome to React</h1>
 </header>
 <p className="App-intro">
 To get started, edit <code>src/App.js</code> and save to reload.
 </p>
 */