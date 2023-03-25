import React from 'react';
import XrayReports from '../../components/reports/XrayReports';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './List.scss';

const XraySection = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className='listContainer'>
                <Navbar />
                <XrayReports />
            </div>
        </div>
    )
}

export default XraySection;