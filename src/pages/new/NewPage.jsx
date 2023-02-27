import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './NewPage.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { Grid } from '@mui/material';
import Controls from '../../control/Controls';
import { useForm, Form } from '../../components/Forms/useForm';
import * as services from '../../services/Services';
import { Link } from 'react-router-dom';

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

function NewPage(props, title) {

    const [file, setFile] = useState('');
    const { addOrEdit, recordForEdit } = props

    console.log(file);

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

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
                        <Form onSubmit={handleSubmit}>
                            <div className='formInput'>
                                <label htmlFor='file'>Image:<DriveFolderUploadOutlinedIcon className="icon" /></label>
                                <input type='file' id='file' style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
                            </div>

                            <Grid container>
                                <Grid item xs={6}>
                                    <Controls.Input
                                        name="fullName"
                                        label="Full Name"
                                        value={values.fullName}
                                        onChange={handleInputChange}
                                        error={errors.fullName}
                                    />
                                    <Controls.Input
                                        label="Email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleInputChange}
                                        error={errors.email}
                                    />
                                    <Controls.Input
                                        label="Mobile"
                                        name="mobile"
                                        value={values.mobile}
                                        onChange={handleInputChange}
                                        error={errors.mobile}
                                    />
                                    <Controls.Input
                                        label="City"
                                        name="city"
                                        value={values.city}
                                        onChange={handleInputChange}
                                    />

                                </Grid>
                                <Grid item xs={6}>
                                    <Controls.RadioButton
                                        name="gender"
                                        label="Gender"
                                        value={values.gender}
                                        onChange={handleInputChange}
                                        items={genderItems}
                                    />
                                    <Controls.SelectButton
                                        name="departmentId"
                                        label="Department"
                                        value={values.departmentId}
                                        onChange={handleInputChange}
                                        options={services.getDepartmentCollection()}
                                        error={errors.departmentId}
                                    />
                                    <Controls.CheckBox
                                        name="isPermanent"
                                        label="Permanent Employee"
                                        value={values.isPermanent}
                                        onChange={handleInputChange}
                                    />

                                    <div>
                                        <Controls.Button
                                            type="submit"
                                            text="Submit" />
                                        <Controls.Button
                                            text="Reset"
                                            color="default"
                                            onClick={resetForm} />
                                    </div>
                                </Grid>
                            </Grid>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPage;