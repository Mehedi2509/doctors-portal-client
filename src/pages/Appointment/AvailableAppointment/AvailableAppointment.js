import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import AppointmentList from '../AppointmentList/AppointmentList';

const appointments = [
    { name: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', space: '10' },
    { name: 'Cosmetic Dentistry', time: '10:05 AM - 11:30 AM', space: '10' },
    { name: 'Teeth Cleaning', time: '5:00 PM - 6:30 PM', space: '10' },
    { name: 'Cavity Protection', time: '7:00 AM - 8:30 AM', space: '10' },
    { name: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', space: '10' },
    { name: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', space: '10' },
]

const AvailableAppointment = ({ date }) => {

    return (
        <div>
            <Typography variant="h4" sx={{ my: 4, color: '#4FD8DA' }}>Available Appointment {date.toDateString()}</Typography>
            <Container>
                <Grid container spacing={4}>
                    {
                        appointments.map(appointment => <AppointmentList
                            key={appointment.name}
                            appointment={appointment}
                            date={date}
                        ></AppointmentList>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default AvailableAppointment;