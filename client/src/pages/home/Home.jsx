import React, { useState } from 'react';
import Chart from '../../components/chart/Chart';
import Widget from '../../components/widget/Widget';
import { Link } from "react-router-dom";
import './Home.scss';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { Container, Typography, Box } from '@mui/material'


const useStyles = makeStyles((theme) => ({
    homeContainer: {
        padding: theme.spacing(2),
    },
    heading: {
        marginBottom: theme.spacing(2),
    },
    widgets: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2)
    },
    chart: {
        marginTop: theme.spacing(2),
    },
}));

const Home = () => {
    const classes = useStyles();

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <div className='home'>
            <Container className={classes.homeContainer}>
                <Typography variant='h4' align='center' className={classes.heading}>
                    Welcome to Medicare Pvt Ltd
                </Typography>
                <Box className={classes.widgets}>
                    <Link to='/users' style={{ textDecoration: 'none' }}>
                        <Widget type='user' />
                    </Link>
                    <Widget type='order' />
                    <Widget type='earning' />
                    <Widget type='balance' />
                </Box>
                <Box className={classes.chart}>
                    <Chart aspect={2 / 1} title='Reports' />
                </Box>
            </Container>
        </div>
    );
};

export default Home;