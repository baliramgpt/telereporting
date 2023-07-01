import React from 'react';
import ContactAdmin from '../new/ContactAdmin';
import './List.scss';

const ContactAdminSection = () => {
    return (
        <div className='list'>
            <div className='listContainer'>
                <ContactAdmin />
            </div>
        </div>
    )
}

export default ContactAdminSection;