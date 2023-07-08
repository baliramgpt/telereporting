import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import DashboardIcon from "@mui/icons-material/Dashboard";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { Link } from "react-router-dom";
import useStyles from './Sidebar.styles';

// import "./Sidebar.scss";

const LabNewSideBar = ({ open, onClose }) => {
    const classes = useStyles();

    const handleDrawerClose = () => {
        onClose();
    };

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
                onClose={handleDrawerClose}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose} aria-label="close sidebar" edge="start">
                        <Close />
                    </IconButton>
                    <Link to="/lab" style={{ textDecoration: "none" }}>
                        <span className={classes.logo} onClick={handleDrawerClose}>Medicare</span>
                    </Link>
                </div>

                <hr />

                <div className={classes.center}>
                    <ul>
                        <p className={classes.title}>MAIN</p>
                        <Link to="/lab" style={{ textDecoration: "none" }}>
                            <li>
                                <DashboardIcon className={classes.icon} />
                                <span onClick={handleDrawerClose}>Dashboard</span>
                            </li>
                        </Link>
                        <Link to="/lab/x-ray" style={{ textDecoration: "none" }}>
                            <li>
                                <MedicalInformationIcon className={classes.icon} />
                                <span onClick={handleDrawerClose}>X-Ray Reporting</span>
                            </li>
                        </Link>
                        <Link to="/lab/ecg" style={{ textDecoration: "none" }}>
                            <li>
                                <MonitorHeartIcon className={classes.icon} />
                                <span onClick={handleDrawerClose}>ECG Reporting</span>
                            </li>
                        </Link>

                        <Link to="/lab/eeg" style={{ textDecoration: "none" }}>
                            <li>
                                <MedicalInformationIcon className={classes.icon} />
                                <span onClick={handleDrawerClose}>EEG Reporting</span>
                            </li>
                        </Link>
                        <Link to="/lab/mri" style={{ textDecoration: "none" }}>
                            <li>
                                <MedicalInformationIcon className={classes.icon} />
                                <span onClick={handleDrawerClose}>MRI Reporting</span>
                            </li>
                        </Link>
                        <Link to="/lab/ctscan" style={{ textDecoration: "none" }}>
                            <li>
                                <MedicalInformationIcon className={classes.icon} />
                                <span onClick={handleDrawerClose}>CT-Scan Reporting</span>
                            </li>
                        </Link>
                        <p className={classes.title}>ACCOUNTS</p>
                        <Link to="/lab/payment" style={{ textDecoration: "none" }}>
                            <li>
                                <PaymentIcon className={classes.icon} />
                                <span onClick={handleDrawerClose}>Payment</span>
                            </li>
                        </Link>
                        <Link to="/lab/billing" style={{ textDecoration: "none" }}>
                            <li>
                                <PaymentsIcon className={classes.icon} />
                                <span onClick={handleDrawerClose}>Billing</span>
                            </li>
                        </Link>
                        <p className={classes.title}>SETTINGS</p>
                        <Link to="/lab/rate" style={{ textDecoration: "none" }}>
                            <li>
                                <PriceChangeOutlinedIcon className={classes.icon} />
                                <span onClick={handleDrawerClose}>Rate Chart</span>
                            </li>
                        </Link>
                        <Link to="/lab/contact" style={{ textDecoration: "none" }}>
                            <li>
                                <CallOutlinedIcon className={classes.icon} />
                                <span onClick={handleDrawerClose}>Contact Admin</span>
                            </li>
                        </Link>
                    </ul>
                </div >
            </Drawer >
        </div >
    )
}

export default LabNewSideBar