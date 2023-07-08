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
import useStyles from './Sidebar.styles';


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
                    <Link to="/doctor" style={{ textDecoration: "none" }}>
                        <span className={classes.logo}>Medicare</span>
                    </Link>
                </div>
                <hr />
                <div className={classes.center}>
                    <ul>
                        <p className={classes.title}>MAIN</p>
                        <Link to="/doctor" style={{ textDecoration: "none" }}>
                            <li>
                                <DashboardIcon className={classes.icon} />
                                <span>Dashboard</span>
                            </li>
                        </Link>

                        <p className={classes.title}>ACCOUNTS</p>
                        <Link to="/lab/payment" style={{ textDecoration: "none" }}>
                            <li>
                                <PaymentIcon className={classes.icon} />
                                <span>Payment</span>
                            </li>
                        </Link>
                        <Link to="/lab/billing" style={{ textDecoration: "none" }}>
                            <li>
                                <PaymentsIcon className={classes.icon} />
                                <span>X-Ray Billing</span>
                            </li>
                        </Link>
                        <Link to="/lab/billing" style={{ textDecoration: "none" }}>
                            <li>
                                <PaymentsIcon className={classes.icon} />
                                <span>ECG Billing</span>
                            </li>
                        </Link>
                        <p className={classes.title}>SETTINGS</p>
                        <Link to="/lab/settings" style={{ textDecoration: "none" }}>
                            <li>
                                <SettingsApplicationsIcon className={classes.icon} />
                                <span>General Settings</span>
                            </li>
                        </Link>
                        <Link to="/lab/rate" style={{ textDecoration: "none" }}>
                            <li>
                                <PriceChangeOutlinedIcon className={classes.icon} />
                                <span>Rate Chart</span>
                            </li>
                        </Link>
                        <Link to="/lab/contact" style={{ textDecoration: "none" }}>
                            <li>
                                <CallOutlinedIcon className={classes.icon} />
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
