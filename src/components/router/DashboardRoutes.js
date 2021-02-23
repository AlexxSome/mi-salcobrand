import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from '../common/Navbar';
import { HomeScreen } from '../home/HomeScreen';
import { Registration } from '../registration/Registration';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route exact path='/register' component={Registration} />
                    <Route component={HomeScreen} />

                    <Redirect to={HomeScreen} />
                </Switch>
            </div>
        </>
    )
}
