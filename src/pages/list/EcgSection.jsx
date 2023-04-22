import React from 'react';
import EcgReports from '../../components/reports/EcgReports';
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