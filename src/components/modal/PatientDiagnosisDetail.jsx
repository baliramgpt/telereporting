import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import Controls from '../../control/Controls'
import { useForm, Form } from '../../components/Forms/useForm'
import * as services from '../../services/Services'
import PDFReports from '../reports/PDFReports';
import { PDFDownloadLink } from "@react-pdf/renderer";
import './Registration.scss';
import dayjs from 'dayjs';


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const currentDate = new Date();

const initialFValues = [
    'Frontal sinuses',
    'Ethmoid sinuses',
    'Maxillary sinuses',
    'Sphenoid sinus',
    'Nasal septum',
    'Nasal mucosa',
    'Nasal cavity',
    'Other'
]

const PatientDiagnosisDetail = (props) => {
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
                <Grid item>
                    {console.log("patient diagnosis details")}
                    {initialFValues.map(item => (
                        <Controls.Input
                            name={item}
                            label={item}
                            value={item.toLocaleLowerCase() !== "other" ? "Normal" : "Nil"}
                            onChange={handleInputChange}
                        />
                    ))}
                </Grid>

                <Grid item>
                    <div className='btn-grp-diagnosis-modal'>
                        <Controls.Button
                            type="submit"
                            text="Submit"
                        />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm}
                        />

                        <PDFDownloadLink
                            document={<PDFReports data={initialFValues} />}
                            fileName="report.pdf"
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <Controls.Button
                                text="Preview Report"
                            // onClick={resetForm}
                            />
                        </PDFDownloadLink>

                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default PatientDiagnosisDetail;