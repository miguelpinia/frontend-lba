import Paper from '@material-ui/core/Paper';
import React from 'react';

const Datos = ({ classes, ...props }) => {
  return (
    <React.Fragment>
      <Paper className={classes.fullDiv}>
        <h2> Datos de la ejecución</h2>
      </Paper>
    </React.Fragment>
  );
};

export default Datos;
