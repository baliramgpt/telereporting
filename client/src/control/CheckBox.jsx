import React from 'react'
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material'

const CheckBox = (props) => {
    const { name, label, value, onChange } = props;


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox
                    name={name}
                    color="primary"
                    checked={value}
                    onChange={onChange}
                />}
                label={label}
            />
        </FormControl>
    )
}

export default CheckBox