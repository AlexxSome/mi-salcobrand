import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { HomeScreen } from './HomeScreen';
import { Navbar } from './common/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route component={HomeScreen} />
                </Switch>
                
            </div>

        </Router>
    )
}
