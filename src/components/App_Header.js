import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core';

import LoginButton from './Login_Button';

const styles = {
    flex: {
      flex: 1,
    },
  };
  
  const AppHeader = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Kaizen Stock Exchange
      </Typography>
      <div className={classes.flex} />
      <LoginButton />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);