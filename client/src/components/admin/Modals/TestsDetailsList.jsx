
import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import Controls from '../../../control/Controls'
import { useForm, Form } from '../../../components/Forms/useForm'
import * as services from '../../../services/Services'
import { makeStyles } from '@material-ui/core'
import './UsersList.scss';

const useStyles = makeStyles(theme => ({
    dropdownMenu: {
        '& .MuiMenu-paper': {
            maxHeight: theme.spacing(40)
        },
        '& .MuiPaper-root': {
            maxHeight: theme.spacing(30)
        }
    }
}))

const initialFValues = {
    id: 0,
    test: '',
    rate: '',
    desc: '',
    type: '',
}

const options = [
    { value: 'MRI', label: 'MRI' },
    { value: 'ECG', label: 'ECG' },
    { value: 'EEG', label: 'EEG' },
    { value: 'CT-Scan', label: 'CT-Scan' },
    { value: 'X-Ray', label: 'X-Ray' },
];

const TestsDetailsList = (props) => {
    const classes = useStyles();

    const { addOrEdit, recordForEdit, records, setRecords } = props

    const [testDetailsRow, setTestDetailsRow] = useState([1, 2, 3, 4, 5]);

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
        addOrEdit(values, resetForm);
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    const addMoreRow = () => {
        testDetailsRow.push(testDetailsRow.length + 1);
        setTestDetailsRow(testDetailsRow);
    }

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
                        className={classes.dropdownMenu}
                    />
                    <Controls.TextArea
                        label="Type"
                        name="type"
                        placeholder="Type"
                        value={values.type}
                        onChange={handleInputChange}
                    />
                    {
                        testDetailsRow.map((item, index) => (
                            <Controls.Input
                                name="rate"
                                label={`Test Details ${index + 1}`}
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