import React from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "react-circular-progressbar/dist/styles.css";

import './Featured.scss';

const Featured = () => {
    return (
        <div className='featured'>
            <div className='top'>
                <h1 className='title'>Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize='small' />
            </div>
            <div className='bottom'>
                <div className='featuredChart'>
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={3} background={true} styles={buildStyles({

                        pathTransitionDuration: 0.5,
                    })} />
                </div>
                <p className='title'>Total sales made today.</p>
                <p className='amount'>$100</p>
                <p className='desc'>Previous transaction records</p>

                <div className='summary'>
                    <div className='item'>
                        <div className='itemTitle'>Target</div>
                        <div className='itemResult negative'>
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className='resultAmount'>$20.9k</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='itemTitle'>Last Week</div>
                        <div className='itemResult negative'>
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className='resultAmount'>$20.9k</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='itemTitle'>Last Month</div>
                        <div className='itemResult positive'>
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className='resultAmount'>$20.9k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;