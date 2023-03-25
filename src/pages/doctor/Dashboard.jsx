import React, { useState } from 'react';
import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import { Link } from "react-router-dom";
import './Dashboard.scss';

const DoctorDashboard = () => {
    const [ isSideBarOpen, setIsSideBarOpen ] = useState(false);
    return (
        <div className='home'>
            <Sidebar isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
            />
            <div className='homeContainer'>
                <Navbar isSideBarOpen={isSideBarOpen}
                    setIsSideBarOpen={setIsSideBarOpen}
                />
                <div className='headingCenter'>
                    Welcome to Medicare Pvt Ltd (Doctor Services)
                </div>
                <div className='widgets'>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <Widget type="user" />
                    </Link>

                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className='charts'>
                    {/* <Featured /> */}
                    <Chart aspect={2 / 1} title='Reports' />
                </div>
                {/* <div className='listContainer'>
                    <div className='listTitle'>Recent Transaction</div>
                    <Tables />
                </div> */}
            </div>
        </div>
    )
}

export default DoctorDashboard;