import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Dashboard.scss';
import AdminSidebar from '../../components/sidebar/AdminSidebar';
import AdminWidget from './widget/AdminWidget';
import Bargraph from './bargraph/Bargraph';

const data = [
    { month: "Jan", totalPatients: 50 },
    { month: "Feb", totalPatients: 70 },
    { month: "Mar", totalPatients: 100 },
    { month: "Apr", totalPatients: 80 },
    { month: "May", totalPatients: 120 },
    { month: "Jun", totalPatients: 90 },
];


const AdminDashboard = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
        <div className='home'>
            <AdminSidebar isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
            />
            <div className='homeContainer'>
                <div className='headingCenter'>
                    Welcome to Medicare Pvt Ltd
                </div>
                <div className='headingCenter'>
                    Admin Panel
                </div>
                <div className='widgets'>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <AdminWidget type="user" />
                    </Link>

                    <AdminWidget type="order" />
                    <AdminWidget type="earning" />
                    <AdminWidget type="balance" />
                </div>
                <Bargraph data={data} />
            </div>
        </div>
    )
}

export default AdminDashboard;