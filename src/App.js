import React, {Component} from 'react';
import './css/App.css';

import {
    MuiThemeProvider
} from 'material-ui';

import YMAppBar from './components/YMAppBar';
import YMBottomNavigation from './components/YMBottomNavigation';
import HomePage from './components/HomePage';
import CalendarPage from './components/CalendarPage';
import SettingsPage from './components/SettingsPage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        };
    }
    select = (msg) => {
        this.setState(msg);
    };
    render() {
        let page;
        if(this.state.selectedIndex === 0){
            page = <HomePage/>
        }
        if(this.state.selectedIndex === 1){
            page = <CalendarPage/>
        }
        if(this.state.selectedIndex === 2){
            page = <SettingsPage/>
        }
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="App-header">
                        <YMAppBar/>
                    </div>
                    <div className="App-container">
                        {page}
                    </div>
                    <div className="App-navigator">
                        <YMBottomNavigation select={this.select}/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
