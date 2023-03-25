import React from 'react';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuIcon from '@mui/icons-material/Menu';


import './Navbar.scss';

const Navbar = ({isSideBarOpen, setIsSideBarOpen}) => {
    console.log("sidebar", isSideBarOpen);
    const handleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='navTitle'> 
                    <MenuIcon className="icon" onClick={handleSideBar}/>
                    <h1 className='navTitleText'> Medicare</h1> 
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