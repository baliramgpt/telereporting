import React from 'react';
import CTScanReports from '../../components/reports/CTScanReports';
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