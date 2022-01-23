import { TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = { email };

        fetch('http://localhost:4000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '40%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                />
                <input style={{ padding: '18px 40px', color: 'white', backgroundImage: 'linear-gradient(to left,rgb(102, 207, 128),rgb(122, 189, 180))', border: '0', marginLeft: '5px', borderRadius: '5px', fontWeight: '700', fontSize: '17px' }} type="submit" value="Make Admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;