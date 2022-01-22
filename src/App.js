import React from 'react';
import Button from '@mui/material/Button';
import {AppBar, Container, Toolbar, IconButton,Typography, Box, Paper, Grid} from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
      flexGrow:1
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
  }
}))

function App() {
  const classes = useStyles();
  return (
    <>
   <AppBar position='fixed'>
   <Container fixed>
    <Toolbar>
     <IconButton edge='start'
      color='inherit' aria-label='menu' className={classes.menuButton}>
      <MenuIcon />
     </IconButton>
     <Typography variant='h6' className={classes.title}>Web Developer</Typography>
     <Box mr={3}>
     <Button color='inherit' variant='outlined'>Log In</Button>
     </Box>
      <Button color='secondary' variant='contained'>Sign Up</Button>
    </Toolbar>
   </Container>
   </AppBar>
   <main>
   <Paper className={classes.mainFeaturesPost}
   style={{ backgroundImage: 'url(https://source.unsplash.com/random)'}}>
     <Container fixed>
       <Grid container>
        <Grid iten md={6}>
          <div className={classes.mainFeaturesPostContent}>
           <Typography component='h1' variant='h1' color='inherit' gutterBottom>Web Developer</Typography>
            <Typography component='h5' variant='h5' color='inherit' paragraph>
            I have just moved from linux ubuntu to windows and here first errors. When i try to restart the app i receive this errors.And every time i have to restart the whole computer in order to see the changes.After restarting the whole computer npm start works fine. i tried to update the npm but no result. Could anyone help?
            </Typography>
              <Button color='secondary' variant='contained'>Learn More</Button>
          </div>
        </Grid>
       </Grid>
     </Container>
    </Paper>
   </main>
   </>
  );
}

export default App;
