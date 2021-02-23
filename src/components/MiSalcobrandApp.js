import React, { useState } from 'react'
import { AppRouter } from './router/AppRouter';
import {UserContext} from './user/UserContext';

export const MiSalcobrandApp = () => {

    const [user, setUser] = useState({});

    return (
        <div>
            <UserContext.Provider value={{user, setUser}}>
                <AppRouter />
            </UserContext.Provider>  
        </div>
    )
}
