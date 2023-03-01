import React from 'react'
//import DateFnsUtils from '@date-io/date-fns'
//import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { DateTimePicker } from '@material-ui/pickers'


const DatePicker = (props) => {
    const { name, label, value, onChange } = props


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <>
            <DateTimePicker
                label={label}
                format="dd/mm/yyyy"
                value={value}
                name={name}
                onChange={date => onChange(convertToDefEventPara(name, date))}
            />
        </>
    )
}

export default DatePicker