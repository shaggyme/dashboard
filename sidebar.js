import React from "react";
import classes from './sidebar.module.css';
import logo from '../assets/images/logo.svg';
import Grid from '@mui/material/Grid';
import { Button, Paper, Link, Box } from "@mui/material";

const Sidebar = () => {
    return(
      <Paper elevation={16} className={classes.sidebarContainer}>
          <Grid>
           <img className={classes.logoStyle} src={logo} alt='logo'></img>
          </Grid>
          <Grid style={{backgroundColor:'deepskyblue', textAlign: 'center', color: 'white', marginBottom: '8px', borderRadius: '20px', height: '35px', padding: '5px'}}>
          <Box>
            Dashboard
          </Box>  
          </Grid>
          <Grid style={{textAlign: "center"}}> 
          <Button variant="text">
          <Link href="#" underline="none">
            Courses
          </Link>  
          </Button>
          <Button variant="text">
          <Link href="#" underline="none">
            Grades
          </Link>  
          </Button>
          <Button variant="text">
          <Link href="#" underline="none">
            Notice Board
          </Link>  
          </Button>
          <Button variant="text">
          <Link href="#" underline="none">
            Blogs
          </Link>  
          </Button>
          <Button variant="text">
          <Link href="#" underline="none">
            Ask Expert
          </Link>  
          </Button>
          <Button>
          <Link href="#" underline="none">
            IITP in News
          </Link>  
          </Button>
          <Button>
          <Link href="#" underline="none">
            Campus News
          </Link>
          </Button>
          </Grid> 
      </Paper>
    ) 
}

export default Sidebar
