import React from 'react';
import {NavLink} from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink className="navbar-brand" to='/'>MSB</NavLink>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav">              
                        <NavLink exact className="nav-link" to='/' activeClassName="active">Inicio</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
