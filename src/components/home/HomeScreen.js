import React, { useContext } from 'react'
import { UserContext } from '../user/UserContext';

export const HomeScreen = () => {

    const {user} = useContext(UserContext);

    return (
        <>
            <h2 className='text-center'>Buscar Cliente</h2>

            <div className='container'>
                <form className="row">
                    <div className="col-auto">
                        <label className="">Rut</label>                  
                    </div>
                    <div className="col-auto">
                        <label htmlFor="rut" className="visually-hidden">Password</label>
                        <input type="number" className="form-control" id="rut" placeholder="11111111" />                        
                    </div>

                    <div className="col-auto">-</div>

                    <div className="col-auto">
                        <input type="text" className="form-control" id="dv" placeholder="1" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Buscar</button>
                    </div>
                </form>
            </div>

            <hr />

        </>
    )
}