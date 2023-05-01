import React, { useState } from 'react';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LabNewSideBar from '../sidebar/LabNewSideBar';
import DoctorSidebar from '../sidebar/DoctorSidebar';
import AdminSidebar from '../sidebar/AdminSidebar';
import { IconButton } from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';


import './Navbar.scss';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarOpen = () => {
        setSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='navTitle'>
                    {sidebarOpen ? (
                        <IconButton
                            color="inherit"
                            aria-label="close sidebar"
                            edge="start"
                            onClick={handleSidebarClose}
                        >
                            <Close />
                        </IconButton>
                    ) : (
                        <IconButton
                            color="inherit"
                            aria-label="open sidebar"
                            edge="start"
                            onClick={handleSidebarOpen}
                        >
                            <Menu />
                        </IconButton>
                    )}
                    {/** {(() => {
                        if (window.location.pathname == '/lab') {
                            return <LabNewSideBar open={sidebarOpen} onClose={handleSidebarClose} />
                        } else if (window.location.pathname == '/doctor') {
                            return <DoctorSidebar open={sidebarOpen} onClose={handleSidebarClose} />
                        } else if (window.location.pathname == '/admin') {
                            return <AdminSidebar open={sidebarOpen} onClose={handleSidebarClose} />
                        }
                    })} */}
                    <LabNewSideBar open={sidebarOpen} onClose={handleSidebarClose} />
                    <span className='navTitleText'> Medicare</span>
                </div>
                <div className='items'>
                    <div className='item'>
                        <h2 className='dataNumberText'>Reporting Helpline Number: <span className='dataNumberValue'>1234567890</span> </h2>
                    </div>
                    <div className='item'> <NotificationsNoneOutlinedIcon className='icon' /> <div className='counter'>1</div> </div>
                    <div className='item'> <img className='avatar' alt='avatarImage' src='https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg' /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;