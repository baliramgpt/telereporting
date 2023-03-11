import React from 'react'
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';

const TextArea = (props) => {
    const { name, label, value, error = null, onChange, ...other } = props;
    return (
        <Box width="80%">
            <Textarea
                variant="outlined"
                minRows={2}
                maxRows={3}
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                {...other}
                {...(error && { error: true, helperText: error })}
            />
        </Box>
    )
}

export default TextArea