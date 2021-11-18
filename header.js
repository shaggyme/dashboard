import React, { useState, useEffect } from 'react';
import classes from './header.module.css';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import axios from 'axios';
import { Grid, TextField} from '@mui/material';


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

      <Grid className = {classes.DesktopHeader}>
        <Toolbar style={{position: 'relative', margin: '10px', left: '80px'}}>
          <div className={classes.col}>
          <AccountCircleIcon style={{fontSize: 80}}/>
          </div>
          <div className={classes.col}>
          <h3 style={{marginLeft: '20px', marginBottom: '0px'}}>{userData.name}</h3>
          <h4 style={{marginLeft: '20px', textAlign: 'left', marginTop: '0px'}}>{userData.roll}</h4>
          </div>
        </Toolbar>
        <Toolbar className={classes.searchContainer}>
          <div style={{borderRadius: '20px', backgroundColor: 'white'}}>
             <TextField id="standard-basic" label="Search" variant="standard" />
          </div>
          <div style={{backgroundImage: 'linear-gradient(to right, green, blue, purple', borderRadius: '20px'}}>
            <Badge>
              <NotificationsIcon style={{padding: '7px'}}/>
            </Badge>
            <Badge>
              <MailOutlineIcon style={{padding: '7px'}}/>
            </Badge>
            <Badge>
              <SettingsIcon style={{padding: '7px'}}/>
            </Badge>
          </div>  
          </Toolbar>
      </Grid>
    )
  }
  return(
    <div>
      {container}
    </div>
  )

}

export default Header;
