import Box from '@material-ui/core/Box';
import React from 'react';

const Config = ({ classes, ...props }) => {
  return (
    <React.Fragment>
      <div
        style={{
          gridColumn: '1',
          gridRow: '1'
        }}>
        <Box className={classes.fullDiv}>
          <h1>Configuración de la gráfica</h1>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Config;
