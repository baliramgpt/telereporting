import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.scss';
import Sidebar from '../sidebar/LabSidebar';
import Navbar from '../navbar/Navbar';

const SharedLayout = () => {
  return (
    <div className='list'>
            <Sidebar />
            <div className='listContainer'>
                <Navbar />
                <Outlet/>
            </div>
        </div>
  )
}

export default SharedLayout