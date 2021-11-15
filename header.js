import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import classes from './header.module.css';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import axios from 'axios';
import { AppBar, Box, Paper } from '@mui/material';

const Header = () => {

  const [userData,setUserData] = useState({
    name: 'Abhishek Gaurav',
    roll: '2121CE21'
  }); // we are initializing the use state. here userData is a state variable and  setUserData is a function which update the value of userData.

  // useEffect = (()=>{
  //   axios.get('/getUserData',{
  //     params:{
  //       id: cookies.get('user').id      
  //     }
  //   })
  //   .then((response)=>{
  //     if(response.data){
  //       setUserData(response.data[0])
  //     }
  //   })
  //   .catch(e=>console.log(e))
  //   addUserData();
  // },[])

  const addUserData = ()=>{
    setUserData({
      name:'Abhishek Gaurav',
      roll:'2121CE21'
    })
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '200px',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  let container = null;
  if (userData) {
    container=(
      // <div className = {classes.MobileHeader}>
      //   <Box sx={{ flexGrow: 1 }}>
      //   <AppBar position="static">
      //   <Toolbar>
      //   <div className={classes.searchContainer}>
      //       <Search>
      //         <SearchIconWrapper>
      //           <SearchIcon />
      //         </SearchIconWrapper>
      //         <StyledInputBase
      //           placeholder="Search"
      //           inputProps={{ 'aria-label': 'search' }}
      //         />
      //       </Search>
      //     </div>
      //     <div className={classes.iconsContainer}>
      //       <Badge>
      //         <NotificationsIcon style={{padding: '4px'}}/>
      //       </Badge>
      //       <Badge>
      //         <MailOutlineIcon style={{padding: '4px'}}/>
      //       </Badge>
      //       <Badge>
      //         <SettingsIcon style={{padding: '4px'}}/>
      //       </Badge>
      //     </div>
      //   </AppBar>
      //   </Box>
      // </div>
      <div className = {classes.DesktopHeader}>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar style={{position: 'relative', margin: '15px 400px 15px 150px'}}>
          <div className={classes.col}>
          <AccountCircleIcon style={{fontSize: 80}}/>
          </div>
          <div className={classes.col}>
          <h3 style={{marginLeft: '20px', marginBottom: '0px'}}>{userData.name}</h3>
          <h4 style={{marginLeft: '20px', textAlign: 'left', marginTop: '0px'}}>{userData.roll}</h4>
          </div>
        </Toolbar>
        <Toolbar style={{position: 'absolute', top: '50px' , left: '10%'}}>
          <div className={classes.searchContainer}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </div>
          <div className={classes.iconsContainer}>
            <Badge>
              <NotificationsIcon style={{padding: '4px'}}/>
            </Badge>
            <Badge>
              <MailOutlineIcon style={{padding: '4px'}}/>
            </Badge>
            <Badge>
              <SettingsIcon style={{padding: '4px'}}/>
            </Badge>
          </div>
          </Toolbar>
          </AppBar>
          </Box>
      </div>
    )
  }
  return(
    <div>
      {container}
    </div>
  )

}

export default Header