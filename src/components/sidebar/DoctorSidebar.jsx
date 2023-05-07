import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { makeStyles } from '@material-ui/core/styles';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";

import "./Sidebar.scss";

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    hide: {
        display: 'none',
    },
}));

const DoctorSidebar = ({ open, onClose }) => {
    const classes = useStyles();
    const { isOpen, setIsOpen } = useState(false);
    const { dispatch } = useContext(DarkModeContext);

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
                </div>

                <div className="top">
                    <Link to="/doctor" style={{ textDecoration: "none" }}>
                        <span className="logo">Medicare</span>
                    </Link>
                </div>
                <hr />
                <div className="center">
                    <ul>
                        <p className="title">MAIN</p>
                        <Link to="/doctor" style={{ textDecoration: "none" }}>
                            <li>
                                <DashboardIcon className="icon" />
                                <span>Dashboard</span>
                            </li>
                        </Link>

                        <p className="title">ACCOUNTS</p>
                        <Link to="/lab/payment" style={{ textDecoration: "none" }}>
                            <li>
                                <PaymentIcon className="icon" />
                                <span>Payment</span>
                            </li>
                        </Link>
                        <Link to="/lab/billing" style={{ textDecoration: "none" }}>
                            <li>
                                <PaymentsIcon className="icon" />
                                <span>X-Ray Billing</span>
                            </li>
                        </Link>
                        <Link to="/lab/billing" style={{ textDecoration: "none" }}>
                            <li>
                                <PaymentsIcon className="icon" />
                                <span>ECG Billing</span>
                            </li>
                        </Link>
                        <p className="title">SETTINGS</p>
                        <Link to="/lab/settings" style={{ textDecoration: "none" }}>
                            <li>
                                <SettingsApplicationsIcon className="icon" />
                                <span>General Settings</span>
                            </li>
                        </Link>
                        <Link to="/lab/rate" style={{ textDecoration: "none" }}>
                            <li>
                                <PriceChangeOutlinedIcon className="icon" />
                                <span>Rate Chart</span>
                            </li>
                        </Link>
                        <Link to="/lab/contact" style={{ textDecoration: "none" }}>
                            <li>
                                <CallOutlinedIcon className="icon" />
                                <span>Contact Admin</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
};

export default DoctorSidebar;
