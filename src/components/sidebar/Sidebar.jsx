import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Medicare</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    {/* <p className="title">LISTS</p> */}
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <MedicalInformationIcon className="icon" />
                            <span>X-Ray Reporting</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <MonitorHeartIcon className="icon" />
                            <span>ECG Reporting</span>
                        </li>
                    </Link>
                    {/* <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Notifications</span>
                    </li> */}
                    <p className="title">ACCOUNTS</p>
                    <li>
                        <PaymentIcon className="icon" />
                        <span>Payment</span>
                    </li>
                    <li>
                        <PaymentsIcon className="icon" />
                        <span>X-Ray Billing</span>
                    </li>
                    <li>
                        <PaymentsIcon className="icon" />
                        <span>ECG Billing</span>
                    </li>
                    <p className="title">SETTINGS</p>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>General Settings</span>
                    </li>
                    <li>
                        <PriceChangeOutlinedIcon className="icon" />
                        <span>Rate Chart</span>
                    </li>
                    <li>
                        <CallOutlinedIcon className="icon" />
                        <span>Contact Admin</span>
                    </li>
                </ul>
            </div>
            {/* <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div> */}
        </div>
    );
};

export default Sidebar;