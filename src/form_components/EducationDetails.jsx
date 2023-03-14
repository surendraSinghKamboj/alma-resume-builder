import {Button, Box, Divider } from '@mui/material'
import React from 'react'
import DatePickers from '../input_components/DatePickers'
import TextFields from '../input_components/TextFields'
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import SendIcon from '@mui/icons-material/Send';

const EducationDetails = () => {
  return (
  <Box>
<TextFields name={'domain'} label={'Domain'} inputProps={{
    type:'text',
}} />
<Box  sx={{
        display:"flex",
        alignItems:'center',
        gap:"15px",

    }}
>
<TextFields name={'university'} label={'University'} inputProps={{
    type:'text',
}}/>
<TextFields name={'degree'} label={'Degree'} inputProps={{
    type:'text',
}}/>

</Box>
<Box  sx={{
        display:"flex",
        justifyContent:'space-evenly',
        alignItems:'center',
        gap:'25px'
       

    }}
>
<DatePickers label='Started' name='started'  />
<DatePickers label='Ended' name='ended' />

</Box>
<Divider/>
<Box  sx={{
        display:"flex",
        justifyContent:'space-between',
        alignItems:'center',
        mt:'7px'


    }}>
        <Button variant="outlined" startIcon={<KeyboardReturnOutlinedIcon />}>
  Return
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Next
</Button>
</Box>
  </Box>
  )
}

export default EducationDetails