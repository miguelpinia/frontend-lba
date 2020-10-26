import Button from '@material-ui/core/Button';
import Config from './Config';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Lateral from './Lateral';
import NavBar from './NavBar';
import Paper from '@material-ui/core/Paper';
import React, { useState } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grafica from './Grafica';
import Datos from './Datos';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  tabs: {
    flexGrow: 1
  },
  fullDiv: {
    padding: theme.spacing(2),
    height: '100%'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '95%'
  },
  listRoot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}>
      {value === index && (
        <div
          style={{
            paddingTop: '1%',
            height: '85vh'
          }}>
          {children}
        </div>
      )}
    </div>
  );
};

const Main = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const a11yProps = (index) => ({
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  });

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar
          classes={classes}
          open={open}
          handleDrawerOpen={handleDrawerOpen}
        />
        <Lateral
          classes={classes}
          open={open}
          handleDrawerClose={handleDrawerClose}
          theme={theme}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Paper className={classes.tabs}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor='primary'
              textColor='primary'
              centered>
              <Tab label='Experimentos' {...a11yProps(0)} />
              <Tab label='Gráficas' {...a11yProps(1)} />
            </Tabs>
          </Paper>
          <TabPanel value={value} index={0}>
            <Grid container spacing={3} alignItems='stretch' direction='row'>
              <Grid item container spacing={3} alignItems='stretch'>
                <Grid item xs={12} sm={4}>
                  <Config classes={classes} />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Grafica classes={classes} />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Datos classes={classes} />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div>
              <h1>Gráficas</h1>
              <Button>Aquí se despliegan gráficas mamalonas</Button>
            </div>
          </TabPanel>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Main;
