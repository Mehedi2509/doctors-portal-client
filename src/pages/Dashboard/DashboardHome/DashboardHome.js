import * as React from 'react';
import { Grid } from '@mui/material';
import Calendar from '../../shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Calendar
                    date={date}
                    setDate={setDate}
                >

                </Calendar>
            </Grid>
            <Grid item xs={12} md={8}>
                <Appointments date={date}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;