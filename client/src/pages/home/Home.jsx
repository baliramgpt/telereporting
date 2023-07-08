import React, { useState } from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Tables from '../../components/tables/Tables';
import Widget from '../../components/widget/Widget';
import { Link } from "react-router-dom";
import './Home.scss';

const Home = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
        <div className='home'>
            {/* <Sidebar isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
            /> */}
            <div className='homeContainer'>
                {/* <Navbar isSideBarOpen={isSideBarOpen}
                    setIsSideBarOpen={setIsSideBarOpen}
                /> */}
                <div className='headingCenter'>
                    Welcome to Medicare Pvt Ltd
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

export default Home;