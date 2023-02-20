import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './NewPage.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { Link } from 'react-router-dom';

function NewPage({ title, inputs }) {

    const [file, setFile] = useState('');

    console.log(file);

    return (
        <div className='new'>
            <Sidebar />
            <div className='newContainer'>
                <Navbar />
                <div className='top'>
                    <h1>{title}</h1>
                    <Link to='/users' style={{ textDecoration: 'none' }}>
                        <h1 className='topBack'>Back</h1>
                    </Link>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <img src={file ? URL.createObjectURL(file) : 'https://png.pngitem.com/pimgs/s/516-5168760_upload-avatar-upload-avatar-png-transparent-png.png'} alt='profile upload photo' />
                    </div>
                    <div className='right'>
                        <form>
                            <div className='formInput'>
                                <label htmlFor='file'>Image:<DriveFolderUploadOutlinedIcon className="icon" /></label>
                                <input type='file' id='file' style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
                            </div>
                            {inputs.map((input) => (
                                <div className='formInput' key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} required />
                                </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPage;