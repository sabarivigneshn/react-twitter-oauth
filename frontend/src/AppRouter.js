import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import './App.css';

import App from './App'
import Home from './components/home'
import dashboard from './components/dashboard';

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dashboard" component={dashboard} />
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;