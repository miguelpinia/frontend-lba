import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';

const Grafica = ({ classes, ...props }) => {
  return (
    <React.Fragment>
      <Paper className={classes.fullDiv}>
        <h2> Gráfica simple</h2>
      </Paper>
    </React.Fragment>
  );
};

export default Grafica;
