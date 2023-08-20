import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import Controls from '../../../control/Controls'
import { useForm, Form } from '../../../components/Forms/useForm'
import * as services from '../../../services/Services'
import './UsersList.scss';

const initialFValues = {
    id: 0,
    test: '',
    rate: '',
    desc: '',
}

const options = [
    { value: 'MRI', label: 'MRI' },
    { value: 'ECG', label: 'ECG' },
    { value: 'EEG', label: 'EEG' },
    { value: 'CT-Scan', label: 'CT-Scan' },
    { value: 'X-Ray', label: 'X-Ray' },
];

const AdminNewRateList = (props) => {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('test' in fieldValues)
            temp.patientName = fieldValues.patientName ? "" : "This field is required."
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
                    <Controls.Dropdown
                        name='test'
                        label="Test Name"
                        value={values.test}
                        onChange={handleInputChange}
                        error={errors.test}
                        options={options}
                    />
                    <Controls.Input
                        name="rate"
                        label="Rate"
                        value={values.rate}
                        onChange={handleInputChange}
                    />
                    <Controls.TextArea
                        label="Description"
                        name="desc"
                        placeholder="Description"
                        value={values.desc}
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid item xs={6}>
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit"
                            style={{ marginTop: '70px' }}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default AdminNewRateList;