import React from 'react'
import './List.scss'
import PaymentAdmin from '../new/PaymentAdmin'

const PaymentSection = () => {
    return (
        <div className='list'>
            <div className='listContainer'>
                <PaymentAdmin />
            </div>
        </div>
    )
}

export default PaymentSection