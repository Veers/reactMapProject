import React, {Component} from 'react';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import EMap from './map/MapWrapper';
import LeftPanel from './leftPanel/LeftPanel';
import './App.css';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <LeftPanel/>
                    {/*<Collapsible title="List title" data={ListData}/>*/}
                    <EMap/>
                </div>
            </MuiThemeProvider>
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