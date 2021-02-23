import React from 'react'

export const Login = ({history}) => {

    const handleLogin = ()=>{
        history.replace('/');
    }

    return (
        <div className='container mt-5'>
            <h2 className='text-center'>Ingresar</h2>

            <button className='btn btn-primary' onClick={handleLogin}>Ingresar</button>
        </div>
    )
}
