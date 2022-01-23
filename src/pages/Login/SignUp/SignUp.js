import React, { useState } from 'react';
import login from '../../../images/login.png';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography, CircularProgress, Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const [loginData, setLoginData] = useState({});
    const { createNewUser, isLoading, user, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSignUpSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.re_password) {
            alert('Password did not match')
            return;
        }
        else {
            const { email, password, name } = loginData;
            createNewUser(email, password, name, history);
        }
    }

    return (
        <Container>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item sx={{ mt: 8 }} xs={12} lg={6}>
                    <Typography sx={{ color: 'gray', fontWeight: '700', }} variant="body1" gutterBottom>Sign Up</Typography>
                    {!isLoading && <form style={{ marginTop: '10px' }} onSubmit={handleSignUpSubmit}>
                        <TextField sx={{ width: '75%', m: 1 }} onBlur={handleOnBlur} id="standard-basic" label="Name" variant="standard" name="name" type="text" />
                        <TextField sx={{ width: '75%', m: 1 }} onBlur={handleOnBlur} id="standard-basic" label="Email" variant="standard" name="email" type="email" />
                        <TextField sx={{ width: '75%', m: 1 }} onBlur={handleOnBlur} id="standard-basic" label="Password" variant="standard" name="password" type="password" />
                        <TextField sx={{ width: '75%', m: 1 }} onBlur={handleOnBlur} id="standard-basic" label="Re-Type Password" variant="standard" name="re_password" type="password" />
                        <Button sx={{ width: '75%', m: 1, backgroundImage: 'linear-gradient(to left,rgb(102, 207, 128),rgb(122, 189, 180))', color: 'white', mt: 3 }} type="submit" >Sign Up</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/signIn">
                            <Button variant="text">Already Registered? Please SignIn</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Registration successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} lg={6}>
                    <img width="95%" src={login} alt="login img" />
                </Grid>
            </Grid>

        </Container>
    );
};

export default SignUp;