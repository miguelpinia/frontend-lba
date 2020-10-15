import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import React from 'react';

const Lateral = (props) => {
  const classes = props.classes;
  const open = props.open;
  const handleDrawerClose = props.handleDrawerClose;
  const theme = props.theme;

  return (
    <React.Fragment>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}>
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rt1' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Tooltip title='Experimentación'>
            <ListItem button id='experimentacion'>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary='Experimentación' />
            </ListItem>
          </Tooltip>
          <Tooltip title='Configuración'>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary='Configuración' />
            </ListItem>
          </Tooltip>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Lateral;
