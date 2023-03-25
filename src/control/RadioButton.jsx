import React from 'react'
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@mui/material'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    radioAlign: {
        alignItems: 'center'
    },
    radioLabel: {
        marginLeft: '-33px'
    }
}))

const RadioButton = (props) => {
    const { name, label, value, onChange, items } = props;
    const classes = useStyles();

    return (
        <FormControl className={classes.radioAlign}>
            <FormLabel className={classes.radioLabel}>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
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