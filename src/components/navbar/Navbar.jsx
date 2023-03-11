import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='navTitle'> <h1 className='navTitleText'> Medicare</h1> </div>
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