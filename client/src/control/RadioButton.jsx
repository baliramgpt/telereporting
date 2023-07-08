import React from 'react'
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@mui/material'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    radioAlign: {
        alignItems: 'left',
        marginBottom: '24px !important',
    },
    radioLabel: {
        marginLeft: '8px',
        marginBottom: '8px'
    },
    radioGroup: {
        marginLeft: '16px'
    }
}))

const RadioButton = (props) => {
    const { name, label, value, onChange, items, ...others } = props;
    const classes = useStyles();

    return (
        <FormControl className={classes.radioAlign} {...others}>
            <FormLabel className={classes.radioLabel}>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                className={classes.radioGroup}
                onChange={onChange}>
                {
                    items.map(
                        item => (
                            <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
                        )
                    )
                }
            </MuiRadioGroup>
        </FormControl>
    )
}

export default RadioButton