import { Box, Paper } from '@mui/material'
import React from 'react'
import PersonalInfo from '../form_components/PersonalInfo'

const DetailsFillingPage = () => {
  return (
    <Box >
        <Paper elevation={'5'} sx={{
            padding:'15px',
            
        }}   >
        <PersonalInfo/> 
        </Paper>
    </Box>
  )
}

export default DetailsFillingPage