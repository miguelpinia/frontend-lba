import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  BarChart
} from 'recharts';
import { StateContext } from 'state/StateProvider';

const Basic = ({ data, state, ...props }) => {
  return (
    <React.Fragment>
      <LineChart
        width={1100}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 30
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' padding={{ left: 50, right: 50 }} />
        <YAxis
          domain={['auto', 'auto']}
          label={{ value: 'nanoseconds', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip />
        <Legend verticalAlign='top' height={36} />

        {state.algs?.map((alg) => (
          <Line
            key={alg}
            type='monotone'
            dataKey={alg}
            stroke={state.colors[alg]}
          />
        ))}
      </LineChart>
    </React.Fragment>
  );
};

const BarPutsSteal = ({ state, ...props }) => {
  const data = state.bardata?.map((d) => ({
    name: d.Alg,
    put: d.put_time,
    steal: d.steal_time,
    total: d.total_time
  }));
  return (
    <React.Fragment>
      <BarChart
        width={1100}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 30
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' padding={{ left: 50, right: 50 }} />
        <YAxis
          domain={['auto', 'auto']}
          label={{ value: 'nanoseconds', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip />
        <Legend verticalAlign='top' height={36} />
        <Bar dataKey='put' fill='#8884d8' />
        <Bar dataKey='steal' fill='#82ca9d' />
        <Bar dataKey='total' fill='#829d' />
      </BarChart>
    </React.Fragment>
  );
};

const BarPutsTakes = ({ state, ...props }) => {
  const data = state.bardata?.map((d) => ({
    name: d.Alg,
    puts: d.put_time,
    takes: d.take_time,
    total: d.total_time
  }));
  return (
    <React.Fragment>
      <BarChart
        width={1050}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 30
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' padding={{ left: 50, right: 50 }} />
        <YAxis
          domain={['auto', 'auto']}
          label={{ value: 'nanoseconds', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip />
        <Legend verticalAlign='top' height={36} />
        <Bar dataKey='puts' fill='#8884d8' />
        <Bar dataKey='takes' fill='#82ca9d' />
        <Bar dataKey='total' fill='#829d' />
      </BarChart>
    </React.Fragment>
  );
};

const BarPutsTakesSteals = ({ state, ...props }) => {
  const data = state.bardata?.map((d) => ({
    name: d.Alg,
    puts: d.put_time,
    takes: d.take_time,
    steals: d.steal_time,
    total: d.total_time
  }));
  return (
    <React.Fragment>
      <BarChart
        width={1050}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 30
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' padding={{ left: 50, right: 50 }} />
        <YAxis
          domain={['auto', 'auto']}
          label={{ value: 'nanoseconds', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip />
        <Legend verticalAlign='top' height={36} />
        <Bar dataKey='puts' fill='#8884d8' />
        <Bar dataKey='takes' fill='#82ca9d' />
        <Bar dataKey='steals' fill='#82ca' />
        <Bar dataKey='total' fill='#829d' />
      </BarChart>
    </React.Fragment>
  );
};

const Grafica = ({ classes, ...props }) => {
  const context = React.useContext(StateContext);
  const state = context.state;
  const dispatch = context.dispatch;
  const [data, setData] = React.useState(state.data);
  const [tipo, setTipo] = React.useState('');
  const [title, setTitle] = React.useState('Gráfica');

  const handleChangeGraph = (event) => {
    switch (event.target.value) {
      case 'time':
        setTitle('Gráfica de promedio de tiempo');
        setTipo(event.target.value);
        break;
      case 'takes':
        setTitle('Gráfica de promedio de takes');
        setTipo(event.target.value);
        break;
      case 'puts':
        setTitle('Gráfica de promedio de puts');
        setTipo(event.target.value);
        break;
      case 'steals':
        setTitle('Gráfica de promedio de steals');
        setTipo(event.target.value);
        break;
      default:
        setTipo('');
        setTitle('Gráfica');
    }
  };

  React.useEffect(() => {
    if (state.wait === 'RECEIVED') {
      setTipo('time');
      setData(state.data.time);
      dispatch({ type: 'UPDATE_WAIT', payload: 'WAIT' });
      return;
    }
    switch (tipo) {
      case 'time':
        setData(state.data.time);
        break;
      case 'takes':
        setData(state.data.takes);
        break;
      case 'puts':
        setData(state.data.puts);
        break;
      case 'steals':
        setData(state.data.steals);
        break;
      default:
    }
  }, [state.data, tipo, state.wait, dispatch]);

  return (
    <React.Fragment>
      <Paper className={classes.fullDiv}>
        <Grid container spacing={3} alignItems='stretch'>
          {state.wait === 'GET' ? (
            <React.Fragment>
              <Grid item xs={12}>
                <div style={{ marginTop: '25%' }}>
                  <div style={{ marginLeft: '37%' }}>
                    <Typography variant='subtitle1' gutterBottom>
                      Ejecutando experimento, espere por favor
                    </Typography>
                  </div>
                  <div style={{ maxWidth: '80%', marginLeft: '10%' }}>
                    <LinearProgress />
                  </div>
                </div>
              </Grid>
            </React.Fragment>
          ) : state.variant === 1 ? (
            <React.Fragment>
              <Grid item xs={12} sm={6}>
                <Typography variant='h6' gutterBottom>
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl} variant='outlined'>
                  <InputLabel id='tipos-label'>Tipo de Gráfica</InputLabel>
                  <Select
                    disabled={state.data.time === undefined}
                    labelId='tipos-label'
                    value={tipo}
                    onChange={handleChangeGraph}
                    label='Tipo de Gráfica'>
                    <MenuItem value={''}>Selecciona una opción</MenuItem>
                    <MenuItem value='time'>Gráfica de tiempo</MenuItem>
                    <MenuItem value='takes'>Gráfica de takes</MenuItem>
                    <MenuItem value='puts'>Gráfica de puts</MenuItem>
                    <MenuItem value='steals'>Gráfica de steals</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Basic state={state} data={data} />
              </Grid>
            </React.Fragment>
          ) : state.variant === 2 ? (
            <React.Fragment>
              <Grid item xs={12}>
                <Typography variant='h6' gutterBottom>
                  Puts & Steals
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <BarPutsSteal data={data} state={state} />
              </Grid>
            </React.Fragment>
          ) : state.variant === 3 ? (
            <React.Fragment>
              <Grid item xs={12}>
                <Typography variant='h6' gutterBottom>
                  Puts & Takes
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <BarPutsTakes state={state} />
              </Grid>
            </React.Fragment>
          ) : state.variant === 4 ? (
            <React.Fragment>
              <Grid item xs={12}>
                <Typography variant='h6' gutterBottom>
                  Puts, Takes & Steals
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <BarPutsTakesSteals state={state} />
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid item xs={12}>
                <Typography variant='h6' gutterBottom>
                  Gráficas de resultados
                </Typography>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default Grafica;
