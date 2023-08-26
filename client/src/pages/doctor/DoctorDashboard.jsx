import React, { useState } from 'react';
import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import { Link } from "react-router-dom";
import PatientReports from '../../components/reports/PatientReports';
import './Dashboard.scss';
import DoctorSidebar from '../../components/sidebar/DoctorSidebar';

const DoctorDashboard = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
        <div className='home'>
            <div className='homeContainer'>
                <div className='headingCenter'>
                    Welcome to Medicare Pvt Ltd (Doctor Services)
                </div>
                <div>
                    <PatientReports />
                </div>
            </div>
        </div>
    )
}

export default DoctorDashboard;