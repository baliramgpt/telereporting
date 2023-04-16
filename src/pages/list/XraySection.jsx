import React from 'react';
import XrayReports from '../../components/reports/XrayReports';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/LabSidebar';
import './List.scss';

const XraySection = () => {
    return (
        <div className='list'>
            <div className='listContainer'>
                <XrayReports />
            </div>
        </div>
    )
}

export default XraySection;