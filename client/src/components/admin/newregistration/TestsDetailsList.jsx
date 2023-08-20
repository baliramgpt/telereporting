
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

const TestsDetailsList = (props) => {
    const { addOrEdit, recordForEdit } = props

    const [testDetailsRow, setTestDetailsRow] = useState([1,2,3,4,5]);

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

    const addMoreRow = () => {
        testDetailsRow.push(testDetailsRow.length+1);
        setTestDetailsRow(testDetailsRow);
    }
    console.log(testDetailsRow);

    return (
        <Form>
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
                    {
                        testDetailsRow.map((item, index) => (
                            <Controls.Input
                                name="rate"
                                label={`Test Details ${index+1}`}
                                value={values.rate}
                                onChange={handleInputChange}
                            />
                        ))
                    }
                </Grid>
                <Grid item xs={6}>
                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '30%', marginTop: '95%' }}>
                        <Controls.Button
                            onClick={addMoreRow}
                            type="addMore"
                            text="Add More"
                        />
                        <Controls.Button
                            type="submit"
                            text="Submit"
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default TestsDetailsList;