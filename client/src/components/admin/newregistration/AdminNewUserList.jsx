import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import Controls from '../../../control/Controls'
import { useForm, Form } from '../../../components/Forms/useForm'
import * as services from '../../../services/Services'
import './AdminNewUserList.scss';
import {
    Button,
    Checkbox,
    FormControlLabel,
    Modal,
    Radio,
    RadioGroup,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@material-ui/core';


const roleItems = [
    { id: 'lab', title: 'Lab' },
    { id: 'doctor', title: 'Doctor' },
]

const testtype = [
    { id: 'EEG', title: 'EEG' },
    { id: 'TMT', title: 'TMT' },
]

const initialFValues = {
    id: 0,
    patientName: '',
    email: '',
    mobile: '',
    role: 'lab',
    adress: '',
    tests: [],
}

const MRIRegistration = (props) => {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('patientName' in fieldValues)
            temp.patientName = fieldValues.patientName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
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
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                    <Controls.TextArea
                        label="Adress"
                        name="adress"
                        placeholder="Adress"
                        value={values.adress}
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid item xs={6}>
                    <RadioGroup value={values.role}>
                        <Controls.RadioButton
                            name="role"
                            label="Role"
                            value={values.role}
                            onChange={handleInputChange}
                            items={roleItems}
                        />
                    </RadioGroup>
                    {values.role === 'doctor' && (<>
                        <p>Select Tests:</p>
                        <Controls.CheckBox
                            name="X-ray"
                            label="X-ray"
                            value='X-ray'
                            onChange={handleInputChange}
                            checked={values.tests.includes('X-ray')}
                        />
                        <Controls.CheckBox
                            name="ECG"
                            label="ECG"
                            value='ECG'
                            onChange={handleInputChange}
                            checked={values.tests.includes('ECG')}
                        />
                        <Controls.CheckBox
                            name="CT-Scan"
                            label="CT-Scan"
                            value={values.tests}
                            onChange={handleInputChange}
                            checked={values.tests.includes('CT-Scan')}
                        />
                    </>
                    )}
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

export default MRIRegistration;