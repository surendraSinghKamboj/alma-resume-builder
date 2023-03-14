import { Box, Button, Divider, InputAdornment } from '@mui/material'
import React from 'react'
import TextFields from '../input_components/TextFields'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const PersonalInfo = () => {
  return (
    <Box marginX={'auto'} marginY={'auto'} sx={{


    }}  > 
    <Box
    sx={{
        display:"flex",
        alignItems:'center',
        gap:"15px",

    }}>
        <TextFields name='firstName' label="First Name" inputProps={{
            type:'text'
        }

        }/>
        <TextFields name='lastName' label="Last Name" inputProps={{
            type:'text'
        }

        }/>
    </Box>
    <Box
    sx={{
        display:"flex",
        alignItems:'center',
        gap:"15px",
        
    }}>
        <TextFields name='email' label="Email" inputProps={{
            type:'email'
        }

        }/>
        <TextFields name='mobileNumber' label="Mobile Number" inputProps={{
            type:'number',
            startAdornment:<InputAdornment position='start'>+91</InputAdornment>
        }

        }/>
    </Box>
    <TextFields name='address' label="Address" inputProps={{
            type:'text'
        }

        }/>
         <Box
    sx={{
        display:"flex",
        alignItems:'center',
        gap:"15px",


    }}>
        <TextFields name='city' label="City" inputProps={{
            type:'text'
        }

        }/>
        <TextFields name='state' label="State" inputProps={{
            type:'text'
        }

        }/>
        <TextFields name='postalCode' label="Postal Code" inputProps={{
            type:'number',
            
        }

        }/>
    </Box>
    
          <TextFields name='objective' label="Objective" inputProps={{
            type:'text'
        }

        }/>
        <Divider/>
        <Box  sx={{
        display:"flex",
        justifyContent:'space-between',
        alignItems:'center',
        mt:'7px'


    }}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Next
</Button>
</Box>
    </Box>
  )
}

export default PersonalInfo