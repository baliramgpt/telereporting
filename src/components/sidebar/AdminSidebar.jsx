import "./Sidebar.scss";
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from "@mui/icons-material/Dashboard";
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import PeopleIcon from '@mui/icons-material/People';
import { Close } from '@material-ui/icons';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
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

const AdminSidebar = ({ open, onClose }) => {
    const classes = useStyles();
    // const { isOpen, setIsOpen } = useState(false);
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
                        {/* <p className="title">MAIN</p> */}
                        <Link to="/admin" style={{ textDecoration: "none" }}>
                            <li>
                                <DashboardIcon className="icon" />
                                <span>Dashboard</span>
                            </li>
                        </Link>

                        {/* <p className="title">ACCOUNTS</p> */}
                        <Link to="/admin/users" style={{ textDecoration: "none" }}>
                            <li>
                                <PeopleIcon className="icon" />
                                <span>Users</span>
                            </li>
                        </Link>
                        <Link to="/admin/rates" style={{ textDecoration: "none" }}>
                            <li>
                                <PriceChangeOutlinedIcon className="icon" />
                                <span>Rate List</span>
                            </li>
                        </Link>
                        <Link to="/admin/reports" style={{ textDecoration: "none" }}>
                            <li>
                                <MedicalInformationIcon className="icon" />
                                <span>Reports</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
};

export default AdminSidebar;
