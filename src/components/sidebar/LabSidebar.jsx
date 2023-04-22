import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';


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

const Sidebar = ({ open, onClose }) => {
    const classes = useStyles();

    const handleDrawerClose = () => {
        onClose();
    };

    return (
        <div
            className="sidebar"
        // style={{ display: isSideBarOpen? "": "none" }}
        >
            <div className="top">
                <Link to="/lab" style={{ textDecoration: "none" }}>
                    <span className="logo">Medicare</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/lab" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link to="/lab/x-ray" style={{ textDecoration: "none" }}>
                        <li>
                            <MedicalInformationIcon className="icon" />
                            <span>X-Ray Reporting</span>
                        </li>
                    </Link>
                    <Link to="/lab/ecg" style={{ textDecoration: "none" }}>
                        <li>
                            <MonitorHeartIcon className="icon" />
                            <span>ECG Reporting</span>
                        </li>
                    </Link>

                    <Link to="/lab/eeg" style={{ textDecoration: "none" }}>
                        <li>
                            <MedicalInformationIcon className="icon" />
                            <span>EEG Reporting</span>
                        </li>
                    </Link>
                    <Link to="/lab/mri" style={{ textDecoration: "none" }}>
                        <li>
                            <MedicalInformationIcon className="icon" />
                            <span>MRI Reporting</span>
                        </li>
                    </Link>
                    <Link to="/lab/ctscan" style={{ textDecoration: "none" }}>
                        <li>
                            <MedicalInformationIcon className="icon" />
                            <span>CT-Scan Reporting</span>
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
                            <span>Billing</span>
                        </li>
                    </Link>
                    <p className="title">SETTINGS</p>
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
        </div>
    );
};

export default Sidebar;
