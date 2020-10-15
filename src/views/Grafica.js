import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';

const Grafica = ({ classes, ...props }) => {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.fullDiv}>
          <h2> Gráfica simple</h2>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default Grafica;
