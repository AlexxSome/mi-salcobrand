import React, { useContext } from 'react'
import { UserContext } from '../user/UserContext';

export const HomeScreen = () => {

    const {user} = useContext(UserContext);

    return (
        <div>
            <h1>Home Screen</h1>
            <hr />

            <pre className='container'>
                {JSON.stringify(user)}
            </pre>
        </div>
    )
}