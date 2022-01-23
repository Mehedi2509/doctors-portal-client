import React, { useState } from 'react';
import './SignIn.css';
import loginImg from '../../../images/login.png';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography, CircularProgress, Alert } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignIn = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleSignInSubmit = e => {
        e.preventDefault();
        const { email, password } = loginData;
        loginUser(email, password, location, history);
    }

    return (
        <Container>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item sx={{ mt: 8 }} xs={12} lg={6}>
                    <Typography sx={{ color: 'gray', fontWeight: '700', }} variant="body1" gutterBottom>Sign In</Typography>
                    {!isLoading && <form style={{ marginTop: '10px' }} onSubmit={handleSignInSubmit}>
                        <TextField sx={{ width: '75%', m: 1 }} onChange={handleOnChange} id="standard-basic" label="Email" variant="standard" name="email" type="email" />
                        <TextField sx={{ width: '75%', m: 1 }} onChange={handleOnChange} id="standard-basic" label="Password" variant="standard" name="password" type="password" />
                        <Button sx={{ width: '75%', m: 1, backgroundImage: 'linear-gradient(to left,rgb(102, 207, 128),rgb(122, 189, 180))', color: 'white', mt: 3 }} type="submit" >Sign In</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/signUp">
                            <Button variant="text">New User? Please SignUp</Button>
                        </NavLink>
                        <p>------------ or -------------</p>
                        <Button onClick={() => signInWithGoogle(location, history)} sx={{ width: '75%', m: 1, backgroundImage: 'linear-gradient(to left,rgb(102, 207, 128),rgb(122, 189, 180))', color: 'white', }}>Google Sign In</Button>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User login successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} lg={6}>
                    <img width="95%" src={loginImg} alt="login img" />
                </Grid>
            </Grid>

        </Container>
    );
};

export default SignIn;