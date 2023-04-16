import React from 'react';
import EcgReports from '../../components/reports/EcgReports';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/LabSidebar';
import './List.scss';

const EcgSection = () => {
    return (
        <div className='list'>
            <div className='listContainer'>
                <EcgReports />
            </div>
        </div>
    )
}

export default EcgSection;