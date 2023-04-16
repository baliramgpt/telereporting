import React from 'react';
import CTScanReports from '../../components/reports/CTScanReports';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/LabSidebar';
import './List.scss';

const CTScanSection = () => {
    return (
        <div className='list'>
            <div className='listContainer'>
                <CTScanReports />
            </div>
        </div>
    )
}

export default CTScanSection;