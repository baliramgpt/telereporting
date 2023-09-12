import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { makeStyles } from '@material-ui/core'

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

const Dropdown = (props) => {
    const { label, options, name, value, onChange, ...other } = props;
    const classes = useStyles();
    return (
        <FormControl className={classes.dropdownMenu}>
            <InputLabel>{label}</InputLabel >
            <Select name={name} value={value} onChange={onChange} variant='outlined' className={classes.dropdownMenu}>
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
