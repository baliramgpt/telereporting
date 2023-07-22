import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'


export const useForm = (initialFValues, validateOnChange = false, validate) => {
    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    }
}
const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1),
        },
        '& .MuiInputLabel-formControl': {
            top: -theme.spacing(.75),
            fontSize: theme.spacing(1.7),
            // transform: 'translate(14px, 14px) scale(1)',
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px 14px',
        },
        '& .MuiTextarea-root': {
            fontSize: theme.spacing(1.7),
            width: '100%',
            margin: theme.spacing(1),
        }
    }
}))

export const Form = (props) => {
    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}