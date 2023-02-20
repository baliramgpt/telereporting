import React from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Tables from '../../components/tables/Tables';
import Widget from '../../components/widget/Widget';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Navbar />
                <div className='widgets'>
                    <Widget type="user" />
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