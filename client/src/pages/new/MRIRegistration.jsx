import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import Controls from '../../control/Controls'
import { useForm, Form } from '../../components/Forms/useForm'
import * as services from '../../services/Services'
import axios from 'axios';
import { makeStyles } from '@material-ui/core'
import './Registration.scss';
import dayjs from 'dayjs';
import { API_URL } from '../../api/api';

const useStyles = makeStyles(theme => ({
  container: {
    padding: "30px 0px",
    background: "rgb(255, 255, 255)",
    marginBottom: "10px",
    borderWidth: "0px 1px 1px",
    borderTopStyle: "initial",
    borderRightStyle: "solid",
    borderBottomStyle: "solid",
    borderLeftStyle: "solid",
    borderTopColor: "initial",
    borderRightColor: "rgb(238, 238, 238)",
    borderBottomColor: "rgb(238, 238, 238)",
    borderLeftColor: "rgb(238, 238, 238)",
    borderImage: "initial",
},
}))


const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
]

const testtype = [
  { id: 'ECG', title: 'ECG' },
  { id: 'TMT', title: 'TMT' },
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
  file: null,
  testtype: 'ECG',
}

const MRIRegistration = (props) => {
  const classes = useStyles()
  const { addOrEdit, recordForEdit, records, setRecords } = props
  const [file, setFile] = useState(null);
  const DEFAULT_REG_NO = 1000;

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

  function getLatestRegNo() {
    const latestReport = records.sort((x, y) => y.regNo - x.regNo)[0];
    if (!latestReport) {
      return DEFAULT_REG_NO;
    }
    return latestReport.regNo;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    addOrEdit(values, resetForm);

    if (true) {
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
        // file: values.file,
        testtype: values.testtype,
        reportType: "mri",
      }

      try {
        const response = await axios.post(`${API_URL}/reports`, payload)
          .then((res) => setRecords([...records, response.data]));
      } catch (error) {
        console.log('An error occurred:', error);
      }
    }
  };

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
            value={getLatestRegNo() + 1}
            onChange={handleInputChange}
          />
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
            label="Referral Doctor"
            name="referralDoctor"
            value={values.referralDoctor}
            onChange={handleInputChange}
          />
          <Controls.RadioButton
            name="testtype"
            label="Test Type"
            value={values.testtype}
            onChange={handleInputChange}
            items={testtype}
          />
          <Controls.Input
            type="number"
            label="Bps"
            name="bps"
            placeholder="Bp Systole"
            value={values.bps}
            onChange={handleInputChange}
          />
          <Controls.Input
            type="number"
            label="Bpd"
            name="bpd"
            placeholder="Bp Diastole"
            value={values.bpd}
            onChange={handleInputChange}
          />
          <Controls.Input
            type="number"
            label="SpO2"
            name="spo2"
            placeholder="Spo2"
            value={values.spo2}
            onChange={handleInputChange}
          />
          <Controls.Input
            type="number"
            label="Pulse"
            name="pulse"
            placeholder="Pulse Rate"
            value={values.pulse}
            onChange={handleInputChange}
          />
          <Controls.Input
            type="number"
            label="Height (in cm)"
            name="height"
            placeholder="Height"
            value={values.height}
            onChange={handleInputChange}
          />
          <Controls.Input
            type="number"
            label="Weight (in KG)"
            name="weight"
            placeholder="Weight"
            value={values.weight}
            onChange={handleInputChange}
          />
          <Controls.TextArea
            label="Symptoms"
            name="symptoms"
            placeholder="Symptoms"
            value={values.symptoms}
            onChange={handleInputChange}
          />
          <Controls.TextArea
            label="History"
            name="history"
            placeholder="History"
            value={values.history}
            onChange={handleInputChange}
          />
          <Controls.Input
            type="number"
            label="Contact Number"
            name="contactNo"
            value={values.contactNo}
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
          <div>
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
          </div>
        </Grid>
      </Grid>
    </Form>
  )
}

export default MRIRegistration;