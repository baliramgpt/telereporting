import React from 'react';
import EegReports from '../../components/reports/EegReports';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/LabSidebar';
import './List.scss';

const EEGSection = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className='listContainer'>
                <Navbar />
                <EegReports />
            </div>
        </div>
    )
}

export default EEGSection;