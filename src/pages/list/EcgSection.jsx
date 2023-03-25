import React from 'react';
import EcgReports from '../../components/reports/EcgReports';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './List.scss';

const EcgSection = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className='listContainer'>
                <Navbar />
                <EcgReports />
            </div>
        </div>
    )
}

export default EcgSection;