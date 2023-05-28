import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import Controls from '../../../control/Controls'
import { useForm, Form } from '../../../components/Forms/useForm'
import * as services from '../../../services/Services'
import { makeStyles } from '@material-ui/core'
import '../../new/Registration.scss';
import dayjs from 'dayjs';

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const PatientDetailsModal = (props) => {
    const { addOrEdit, recordForEdit } = props
    const [file, setFile] = useState(null);

    const useStyles = makeStyles(theme => ({
        root: {
          "& .Mui-disabled": {
            color: "#ffb303"
          }
        }
      }));

    const values = {
        regNo: "101",
        patientName: "test01",
        age: "30",
        email: "test@test01.com",
        referralDoctor: "Mr. Test",
        testName: "LEFT XRAY",
        history: "test test",
        contactNo: 9988776655,
        gender: "Male",
        doctorId: "Dr. EFG"
    }

    return (
        <Form >
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        disabled
                        label="Registration No / Bill No"
                        name="regNo"
                        // value={values.regNo}
                    />
                    <Controls.Input
                        disabled
                        name="patientName"
                        label="Patient Name"
                        // value={values.patientName}
                    />
                    <Controls.Input
                        disabled
                        name="age"
                        label="Age"
                        // value={values.age}
                    />
                    <Controls.Input
                        disabled
                        label="Email"
                        name="email"
                        // value={values.email}
                    />
                    <Controls.Input
                        disabled
                        label="Referral Doctor"
                        name="referralDoctor"
                        // value={values.referralDoctor}
                    />
                    <Controls.SelectButton
                        disabled
                        name="testName"
                        label="Test Name"
                        value={values.testName}
                        options={services.getTestName()}
                    />
                    <Controls.Date
                        disabled
                        label="Test Date"
                        name="testDate"
                        // value={dayjs(values.testDate)}
                    />
                    <Controls.TextArea
                        disabled
                        label="History / Analysis"
                        name="history"
                        placeholder="History / Analysis"
                        // value={values.history}
                    />
                    <Controls.Input
                        disabled
                        label="Contact Number"
                        name="contactNo"
                        type="number"
                        // value={values.contactNo}
                    />
                    <Controls.RadioButton
                        disabled
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        items={genderItems}
                    />
                    <Controls.SelectButton
                        disabled
                        name="doctorId"
                        label="Assign to Doctor"
                        value={values.doctorId}
                        options={services.getDoctorsCollection()}
                    />
                </Grid>

                <Grid item xs={6}>
                    <div className='formInput'>
                        <label htmlFor='file'>Image:<DriveFolderUploadOutlinedIcon className="icon" /></label>
                        {/* <input type='file' id='file' accept='image/*' name='file' value={values.file} style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} /> */}
                    </div>
                    <div className='left'>
                        {file && (
                            <img className='img-attached' src={file ? URL.createObjectURL(file) : 'https://png.pngitem.com/pimgs/s/516-5168760_upload-avatar-upload-avatar-png-transparent-png.png'}
                                alt='profile upload photo' />
                        )}
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default PatientDetailsModal;