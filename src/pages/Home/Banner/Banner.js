import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const bannerBackground = {
    background: `url(${bg})`
}

const Banner = () => {
    return (
        <div>
            {/* Banner section */}
            <Grid style={bannerBackground} container spacing={2} sx={{ py: 4 }}>
                <Grid xs={12} md={5} sx={{ textAlign: 'start', display: 'flex', }}>
                    <Box sx={{ m: 14 }}>
                        <Typography variant="h4" sx={{ fontWeight: '700', }}>
                            Your New Smile Starts Here
                        </Typography>
                        <Typography variant="p" component="p" sx={{ my: 3, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur  elit. Second aliquam praesentium vei. Amet veniam odio vero doloremque
                        </Typography>
                        <Button style={{ backgroundColor: '#4FD8DA', color: 'white' }}>Get Appointment</Button>
                    </Box>

                </Grid>
                <Grid xs={12} md={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width="60%" src={chair} alt="" />
                </Grid>
            </Grid>

            {/* Contact section */}
            <Container sx={{ mt: -5 }}>
                <Grid sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: 20 }}>
                    <Grid sx={{ backgroundColor: '#4FD8DA', height: '100px', borderRadius: 3 }}>

                    </Grid>
                    <Grid sx={{ backgroundColor: 'black', height: '100px', borderRadius: 3 }}>
                        <Typography>
                            hello
                        </Typography>
                    </Grid>
                    <Grid sx={{ backgroundColor: '#4FD8DA', height: '100px', borderRadius: 3 }}>
                        <Typography>
                            hello
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

        </div >
    );
};

export default Banner;