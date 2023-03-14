import { Box, Paper } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'
import EducationDetails from '../form_components/EducationDetails'
import PersonalInfo from '../form_components/PersonalInfo'


const DetailsFillingPage = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box sx={{
        my:'15px'
    }}>
        <Paper elevation={5} sx={{
            padding:'25px',
            
        }}   >
        <PersonalInfo/> 
        </Paper>
        <Paper elevation={5} sx={{
            padding:'25px',
            mt:'20px'
            
        }}  >
            <EducationDetails/>
        </Paper>
    </Box>
    </LocalizationProvider>
  )
}

export default DetailsFillingPage