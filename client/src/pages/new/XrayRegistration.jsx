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
        if ('contactNo' in fieldValues)
            temp.contactNo = fieldValues.contactNo.length > 9 ? "" : "Minimum 10 digits required."
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(values, "#", validate());
        // if (validate()) {
        addOrEdit(values, resetForm);
        // }
        if (validate()) {
            const payload = {
                id: values.id,
                patientName: values.patientName,
                age: values.age,
                email: values.email,
                contactNo: values.contactNo,
                gender: values.gender,
                referralDoctor: values.referralDoctor,
                testDate: values.testDate.format('YYYY-MM-DD'),
                testName: values.testName,
                history: values.history,
                doctorId: values.doctorId,
                regNo: values.regNo,
                file: values.file,
            };

            // Perform further actions with the payload (e.g., send it to an API endpoint)
            console.log('payload', payload);
            // addOrEdit(payload, resetForm);

            try {
                const response = await fetch('https://api.example.com/xrayregistration', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                if (response.ok) {
                    console.log('Form data sent successfully!');
                } else {
                    console.log('Failed to send form data.');
                    // Handle the error condition
                }
            } catch (error) {
                console.log('An error occurred:', error);
                // Handle the error condition
            }

        }

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
                        disabled
                        label="Registration No / Bill No"
                        name="regNo"
                        value={values.regNo}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        required
                        name="patientName"
                        label="Patient Name"
                        value={values.patientName}
                        onChange={handleInputChange}
                        error={errors.patientName}
                    />
                    <Controls.Input
                        required
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
                        required
                        label="Referral Doctor"
                        name="referralDoctor"
                        value={values.referralDoctor}
                        onChange={handleInputChange}
                    />
                    <Controls.SelectButton
                        required
                        name="testName"
                        label="Test Name"
                        value={values.testName}
                        onChange={handleInputChange}
                        options={services.getTestName()}
                        error={errors.testName}
                    />
                    <Controls.Date
                        required
                        label="Test Date"
                        name="testDate"
                        value={dayjs(values.testDate)}
                        onChange={handleInputChange}
                    />
                    <Controls.TextArea
                        required
                        label="History / Analysis"
                        name="history"
                        placeholder="History / Analysis"
                        value={values.history}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        required
                        label="Contact Number"
                        name="contactNo"
                        type="number"
                        value={values.contactNo}
                        onChange={handleInputChange}
                        error={errors.contactNo}
                    />
                    <Controls.RadioButton
                        required
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.SelectButton
                        required
                        name="doctorId"
                        label="Assign to Doctor"
                        value={values.doctorId}
                        onChange={handleInputChange}
                        options={services.getDoctorsCollection()}
                        error={errors.doctorId}
                    />
                </Grid>

                <Grid item xs={6}>
                    <div className='formInput'>
                        <label htmlFor='file'>Image:<DriveFolderUploadOutlinedIcon className="icon" /></label>
                        <input type='file' id='file' accept='image/*' name='file' value={values.file} style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <div className='left'>
                        {file && (
                            <img className='img-attached' src={file ? URL.createObjectURL(file) : 'https://png.pngitem.com/pimgs/s/516-5168760_upload-avatar-upload-avatar-png-transparent-png.png'}
                                alt='profile upload photo' />
                        )}
                    </div>
                    <div className='btn-grp'>
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