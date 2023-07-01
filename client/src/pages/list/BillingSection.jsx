import React from 'react'
import './List.scss';
import BillingReport from '../../components/reports/BillingReport';

const BillingSection = () => {
    return (
        <div className='list'>
            <div className='listContainer'>
                <BillingReport />
            </div>
        </div>
    )
}

export default BillingSection