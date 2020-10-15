import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const NavBar = (props) => {
  const classes = props.classes;
  const open = props.open;
  const handleDrawerOpen = props.handleDrawerOpen;

  return (
    <React.Fragment>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, { [classes.appBarShift]: open })}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, { [classes.hide]: open })}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Algoritmos concurrentes
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
