import { Button, Grid, InputAdornment, TextField } from '@material-ui/core';
import './login.css' 
import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, RaisedButton } from 'material-ui';
import { AccountCircle, LockRounded } from '@material-ui/icons';

export const Login = ({history}) => {

    const handleLogin = ()=>{
        history.replace('/');
    }

    return (
        <div >
           <Grid container className='contenedor'>
                <Grid item xs={12} sm={6}>
                    <img
                        src="https://paseopuertovaras.cl/wp-content/uploads/2019/02/IMG_20190125_140955752.jpg"
                        style={{width:"100%", height:"100%", objectFit:"cover"}}
                        alt="brand"
                    />
                </Grid>
                <Grid container className='itemRight' item xs={12} sm={6} alignItems='center' direction='column' justify='space-between'>
                    <div />
                    <div className='containerTextlogin'>
                        <Grid container  justify='center'>
                            <img
                                src="https://www.mallsyoutletsvivo.cl/vivo-coquimbo/wp-content/uploads/sites/2/2018/06/salcobrand-600x600.png"
                                width={200}
                                alt='logo'
                            />
                        </Grid>
                        <TextField label="Usuario" margin="normal" InputProps={{startAdornment:(<InputAdornment position="start"><AccountCircle  /></InputAdornment>),}}/>
                        <TextField 
                            label="Contraseña" 
                            margin="normal" 
                            type='password' 
                            InputProps={{startAdornment:(<InputAdornment position="start"><LockRounded /> </InputAdornment>)}}
                        />
                        <div className='spaceDiv'/>
                        <Button color='primary' variant='contained' onClick={handleLogin}>Ingresar</Button>
                    </div>
                    <Grid container justify='center'>
                        <Grid item>
                            <Button className='mx-1' variant='outlined' color='primary' href='https://salcobrand.cl/'>comunidad Salcobrand</Button>
                        </Grid>
                        <Grid item>
                            <Button className='mx-1' variant='outlined' color='primary'>Recordar contraseña</Button>
                        </Grid>
                    </Grid>
                    <div />
                </Grid>

           </Grid>
        </div>
    )
}
