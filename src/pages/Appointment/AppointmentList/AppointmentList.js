import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const AppointmentList = ({ appointment, date, setBookingSuccess }) => {
    const { name, time, space } = appointment;

    // open modal
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 4 }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ color: '#4FD8DA', fontWeight: 500 }}>
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div" sx={{ fontWeight: 500 }}>
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleOpenModal} variant="contained" sx={{ backgroundColor: '#4FD8DA', mt: 1 }}>APPOINTMENT </Button>
                </Paper>
            </Grid>
            <BookingModal
                key={appointment.name}
                handleCloseModal={handleCloseModal}
                openModal={openModal}
                appointment={appointment}
                date={date}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default AppointmentList;