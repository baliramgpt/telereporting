import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import Controls from '../../control/Controls'
import { useForm, Form } from '../../components/Forms/useForm'
import * as services from '../../services/Services'
import './Registration.scss';
import dayjs from 'dayjs';


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const currentDate = new Date();

const initialFValues = {
    id: 0,
    patientName: '',
    age: '',
    email: '',
    contactNo: '',
    gender: 'male',
    referralDoctor: '',
    testDate: dayjs(new Date()),
    testName: '',
    history: '',
    doctorId: '',
    regNo: '',
    file: null
}

const XrayRegistration = (props) => {
    const { addOrEdit, recordForEdit } = props
    const [file, setFile] = useState(null);

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('patientName' in fieldValues)
            temp.patientName = fieldValues.patientName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('file' in fieldValues)
            temp.file = fieldValues.file ? "" : "This field is required."
        if ('doctorId' in fieldValues)
            temp.doctorId = fieldValues.doctorId.length != 0 ? "" : "This field is required."
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
        resetForm,
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values, "#", validate());
        // if (validate()) {
            addOrEdit(values, resetForm);
        // }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="patientName"
                        label="Patient Name"
                        value={values.patientName}
                        onChange={handleInputChange}
                        error={errors.patientName}
                    />
                    <Controls.Input
                        name="age"
                        label="Age"
                        value={values.age}
                        onChange={handleInputChange}
                        error={errors.age}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Referral Doctor"
                        name="referralDoctor"
                        value={values.referralDoctor}
                        onChange={handleInputChange}
                    />
                    <Controls.SelectButton
                        name="testName"
                        label="Test Name"
                        value={values.testName}
                        onChange={handleInputChange}
                        options={services.getTestName()}
                        error={errors.testName}
                    />
                    <Controls.Date
                        label="Test Date"
                        name="testDate"
                        value={values.testDate}
                        onChange={handleInputChange}
                    />
                    <Controls.TextArea
                        label="History / Analysis"
                        name="history"
                        placeholder="History / Analysis"
                        value={values.history}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Contact Number"
                        name="contactNo"
                        value={values.contactNo}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Registration No / Bill No"
                        name="regNo"
                        value={values.regNo}
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
                        name="doctorId"
                        label="Assign to Doctor"
                        value={values.doctorId}
                        onChange={handleInputChange}
                        options={services.getDoctorsCollection()}
                        error={errors.doctorId}
                    />
                    {/* <Controls.CheckBox
                        name="isPermanent"
                        label="Keep Updated"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    /> */}
                    <div className='formInput'>
                        <label htmlFor='file'>Image:<DriveFolderUploadOutlinedIcon className="icon" /></label>
                        <input type='file' id='file' accept='image/*' name='file' value={values.file} style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <div className='left'>
                        {file && (
                            <img src={file ? URL.createObjectURL(file) : 'https://png.pngitem.com/pimgs/s/516-5168760_upload-avatar-upload-avatar-png-transparent-png.png'}
                                alt='profile upload photo' />
                        )}
                    </div>
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" 
                        />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} 
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default XrayRegistration;