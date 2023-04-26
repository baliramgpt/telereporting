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
import PeopleIcon from '@mui/icons-material/People';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";

const AdminSidebar = ({ isSideBarOpen, setIsSideBarOpen }) => {
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
        </div>
    );
};

export default AdminSidebar;
