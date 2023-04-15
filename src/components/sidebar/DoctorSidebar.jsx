import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";

const DoctorSidebar = ({ isSideBarOpen, setIsSideBarOpen }) => {
    // const { isOpen, setIsOpen } = useState(false);
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div
            className="sidebar"
        // style={{ display: isSideBarOpen? "": "none" }}
        >
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
        </div>
    );
};

export default DoctorSidebar;
