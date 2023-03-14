import { FormControl } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import React from 'react'

const DatePickers = ({label, name}) => {
  return (
    <FormControl>
    
        <DatePicker name={name} label={label} views={['month','year']}   />
   
    </FormControl>
  )
}

export default DatePickers