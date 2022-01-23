import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const link = { textDecoration: 'none', color: 'white' };

const Navigation = () => {
    const { user, logout } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link style={link} to="/home">Doctors Portal</Link>
                    </Typography>
                    <Link style={link} to="/appointment">APPOINTMENT</Link>
                    {
                        user?.email ?
                            <Box>
                                <Button><Link style={{ color: 'white', textDecoration: 'none', marginLeft: '20px', marginTop: '5px' }} to="/dashboard">Dashboard</Link></Button>
                                <Button sx={{ color: 'white', marginTop: '5px', marginLeft: '20px', }} onClick={logout}>Sign Out</Button>
                            </Box>
                            :
                            <Button><Link style={{ color: 'white', textDecoration: 'none', marginLeft: '20px', marginTop: '5px' }} to="/signIn">Sign In</Link></Button>
                    }
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;