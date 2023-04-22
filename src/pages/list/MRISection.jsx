import React from 'react';
import MRIReports from '../../components/reports/MRIReports';
import './List.scss';

const MRISection = () => {
    return (
        <div className='list'>
            <div className='listContainer'>
                <MRIReports />
            </div>
        </div>
    )
}

export default MRISection;