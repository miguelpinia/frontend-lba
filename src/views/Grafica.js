import Paper from '@material-ui/core/Paper';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { StateContext } from 'state/StateProvider';

const Basic = (props) => {
  const context = React.useContext(StateContext);
  const state = context.state;
  const data = state.data;

  const initialState = {
    data,
    left: 'dataMin',
    right: 'dataMax',
    refAreaLeft: '',
    refAreaRight: '',
    top: 'dataMax+1',
    bottom: 'dataMin-1',
    top2: 'dataMax+20',
    bottom2: 'dataMin-20',
    animation: true
  };

  return (
    <div>
      <LineChart
        width={900}
        height={600}
        data={state.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' padding={{ left: 50, right: 50 }} />
        <YAxis />
        <Tooltip />
        <Legend />

        {console.log('algs', state.algs)}
        {state.algs?.map((alg) => (
          <Line
            key={alg}
            type='monotone'
            dataKey={alg}
            stroke={state.colors[alg]}
          />
        ))}

        {/* <Line */}
        {/*   type='monotone' */}
        {/*   dataKey='CHASELEV' */}
        {/*   stroke='#8884d8' */}
        {/*   activeDot={{ r: 8 }} */}
        {/* /> */}
        {/* <Line type='monotone' dataKey='uv' stroke='#82ca' /> */}
        {/* <Line type='monotone' dataKey='amt' stroke='#82ca9d' /> */}
      </LineChart>
    </div>
  );
};

const Grafica = ({ classes, ...props }) => {
  return (
    <React.Fragment>
      <Paper className={classes.fullDiv}>
        <h2> Gráfica simple</h2>
        <Basic />
      </Paper>
    </React.Fragment>
  );
};

export default Grafica;
