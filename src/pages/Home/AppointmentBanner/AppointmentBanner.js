import React from 'react';
import Grid from '@mui/material/Grid';

import doctor from '../../../images/doctor.png';
import CardMedia from '@mui/material/CardMedia';
import bg from '../../../images/appointment-bg.png';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

const AppointmentBanner = () => {
    const appointmentBanner = {
        background: `url(${bg})`,
        backgroundColor: 'rgba(41, 39, 80,0.8)',
        backgroundBlendMode: 'darken, luminosity',
        marginTop: '180px'

    };

    return (
        <div>
            <Grid style={appointmentBanner} container spacing={2}>
                <Grid item xs={12} md={5}>
                    <CardMedia
                        component="img"
                        style={{ marginTop: '-150px' }}
                        image={doctor}
                        alt="green iguana"
                    />
                </Grid>
                <Grid item xs={12} md={7} sx={{ textAlign: 'left', display: 'flex', alignItems: 'center', color: 'white' }}>
                    <Box sx={{ width: '60%', mx: 'auto' }}>
                        <Typography variant="h6" sx={{ my: '30px' }} style={{ color: '#4FD8DA' }}>
                            Appointment
                        </Typography>
                        <Typography sx={{ my: '20px' }} variant="h4">
                            Make An Appointment Today
                        </Typography>
                        <Typography sx={{ my: '20px' }} variant="p" component="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Second aliquam praesentium vei. Amet veniam odio vero doloremque
                        </Typography>
                        <Button style={{ backgroundColor: '#4FD8DA', color: 'white' }} sx={{ my: '30px' }}>LEARN MORE</Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default AppointmentBanner;