import React from 'react';
import MRIReports from '../../components/reports/MRIReports';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/LabSidebar';
import './List.scss';

const MRISection = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className='listContainer'>
                <Navbar />
                <MRIReports />
            </div>
        </div>
    )
}

export default MRISection;