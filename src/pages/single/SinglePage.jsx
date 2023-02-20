import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import './SinglePage.scss';
import Tables from '../../components/tables/Tables';

const SinglePage = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className='singleContainer'>
                <Navbar />
                <div className='top'>
                    <div className='left'>
                        <div className='editButton'>Edit</div>
                        <h1 className='title'>Basic Detail</h1>
                        <div className='item'>
                            <img src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='alternate photo' className="itemImg" />
                            <div className='details'>
                                <h1 className='itemTitle'>John Doe</h1>
                                <div className='detailItem'>
                                    <span className='itemKey'>Email:</span>
                                    <span className='itemValue'>johndoe@gmail.com</span>
                                </div>
                                <div className='detailItem'>
                                    <span className='itemKey'>Phone:</span>
                                    <span className='itemValue'>1234567890</span>
                                </div>
                                <div className='detailItem'>
                                    <span className='itemKey'>Status:</span>
                                    <span className='itemValue'>passive</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <Chart aspect={4 / 1} title='User Spendings last 6 Months' />
                    </div>
                </div>
                <div className='bottom'>
                    <h1 className='title'>Latest Transaction</h1>
                    <Tables />
                </div>
            </div>
        </div>
    )
}

export default SinglePage;