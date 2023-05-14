import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Dropdown = (props) => {
    const { label, options, name, value, onChange, ...other } = props;
    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <Select name={name} value={value} onChange={onChange} variant='outlined'>
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value} {...other}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Dropdown;
