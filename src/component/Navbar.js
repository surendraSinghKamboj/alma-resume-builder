import React from 'react'
import AppBar from '@mui/material/AppBar'
import { NavLink } from 'react-router-dom'
import { Box} from '@mui/system'
// import { Typography } from '@mui/material'
  import logo from '../assets/alma2.png'




export const Navbar = () => {
  const navLinkStyles = ({isActive}) => {
    return{
      textDecoration: isActive ? 'none': 'none',
      color: isActive ? 'rgb(0, 98, 255)' : 'Black',
      
    }
  }

  return (
    <AppBar sx={{backgroundColor:'white' , color: 'black'}}>
     
      <Box
      display={'flex'}
      flexDirection={'row'}
      fontSize={'22px'}
      gap={'30px'}
      padding={'15px'}
      marginRight={'30px' }
      
      
      >
        <img  src={logo} alt='logo'  height={37}/>
        {/* <Typography marginRight={'auto'} fontSize={'22px'} padding={'10px'}marginLeft={'20px'} display={'inline-flex'}><span style={{backgroundColor:'#d50000', color:'white', borderRadius:'15%', padding:'1%'  ,fontWeight:'bolder',}}>Al</span> <span> maBetter </span></Typography> */}
        
        <NavLink to='/' style={navLinkStyles}  className='navLink'>
           Templates </NavLink>
        <NavLink to='/myresumes' style={navLinkStyles} marginLeft={'auto'} className='navLink'>
           My Resumes </NavLink>
        <NavLink to='/about' style={navLinkStyles}marginLeft={'auto'} className='navLink' >
           About </NavLink>
        
        </Box>
        
    </AppBar>
  )
}
