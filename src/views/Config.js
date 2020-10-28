import axios from 'axios';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { median, mean, std } from 'mathjs';
import { StateContext } from 'state/StateProvider';

const stats = (results) => {
  const procs = results.processors;
  const execs = results.executions;
  const iters = results.iterations;
  const algs = results.algorithms;
  let vals = algs.reduce((obj, x) => {
    obj[x] = {};
    return obj;
  }, {});
  for (const proc of Array(procs).keys()) {
    const thread = execs[`thread-${proc}`];
    for (const alg of algs) {
      const iterations = Array.from(Array(iters).keys());
      const data_alg = thread[alg];
      const data_execs = data_alg['data'];
      const exec_time = iterations.map(
        (iter) => data_execs[`${iter}`]['executionTime']
      );
      const takes = iterations.map((iter) => data_execs[`${iter}`]['takes']);
      const puts = iterations.map((iter) => data_execs[`${iter}`]['puts']);
      const steals = iterations.map((iter) => data_execs[`${iter}`]['steals']);
      vals[alg][proc] = {
        median: {
          time: median(exec_time),
          takes: median(takes),
          puts: median(puts),
          steals: median(steals)
        },
        average: {
          time: mean(exec_time),
          takes: mean(takes),
          puts: mean(puts),
          steals: mean(steals)
        },
        std: {
          time: std(exec_time),
          takes: std(takes),
          puts: std(puts),
          steals: std(steals)
        }
      };
      // const exec_time =
    }
  }
  let data = { time: [], steals: [], puts: [], takes: [] };
  for (const proc of Array(procs).keys()) {
    let time = { name: `Hilos: ${proc + 1}` };
    for (const alg of algs) {
      time[alg] = vals[alg][`${proc}`].average.time;
    }
    data.time.push(time);
    let takes = { name: `Hilos: ${proc + 1}` };
    for (const alg of algs) {
      takes[alg] = vals[alg][`${proc}`].average.takes;
    }
    data.takes.push(takes);
    let puts = { name: `Hilos: ${proc + 1}` };
    for (const alg of algs) {
      puts[alg] = vals[alg][`${proc}`].average.puts;
    }
    data.puts.push(puts);
    let steals = { name: `Hilos: ${proc + 1}` };
    for (const alg of algs) {
      steals[alg] = vals[alg][`${proc}`].average.steals;
    }
    data.steals.push(steals);
  }
  return data;
};

const Config = ({ classes, ...props }) => {
  const [experimento, setExperimento] = React.useState('');
  const [checked, setChecked] = React.useState([]);
  const [opcionesAlg, setOpcionesAlg] = React.useState(0);
  const [grafica, setGrafica] = React.useState('');
  const [directed, setDirected] = React.useState(null);
  const [stepSpanning, setStepSpanning] = React.useState('');
  const [vertexSize, setVertexSize] = React.useState(0);
  const [iterations, setIterations] = React.useState(5);
  const [operations, setOperations] = React.useState();
  const [dsSize, setDsSize] = React.useState();
  const [workers, setWorkers] = React.useState();
  const [stealers, setStealers] = React.useState();
  const [structSize, setStructSize] = React.useState(4096);
  const context = React.useContext(StateContext);
  const state = context.state;
  const dispatch = context.dispatch;

  const handleChangeSS = (event) => {
    setStepSpanning(event.target.value);
  };

  const handleChangeGraph = (event) => {
    setGrafica(event.target.value);
  };

  const handleChangeDirected = (event) => {
    setDirected(event.target.checked);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleChangeAlg = (event) => {
    setExperimento(event.target.value);
    if (event.target.value === undefined || event.target.value === '')
      dispatch({ type: 'UPDATE_VARIANT', payload: 0 });
    else if (event.target.value === 'SPANNING_TREE')
      dispatch({ type: 'UPDATE_VARIANT', payload: 1 });
    else if (
      event.target.value === 'putSteals' ||
      event.target.value === 'putTakes'
    )
      dispatch({ type: 'UPDATE_VARIANT', payload: 2 });
    else dispatch({ type: 'UPDATE_VARIANT', payload: 3 });
  };

  const onSubmitExperiment = async () => {
    if (state.variant === 1) {
      console.log(
        checked,
        stepSpanning,
        grafica,
        vertexSize,
        iterations,
        directed
      );
      dispatch({ type: 'UPDATE_ALGS', payload: checked });
      dispatch({ type: 'UPDATE_WAIT', payload: 'GET' });
      await axios
        .post('http://127.0.0.1:3003/spanningTree', {
          data: {
            algorithms: checked,
            spanningTreeOptions: {
              graphType: grafica,
              vertexSize,
              stepSpanningType: stepSpanning,
              iterations,
              directed: !!directed,
              structSize,
              stealTime: false
            }
          }
        })
        .then((response) => {
          const vals = stats(response.data.ejecucion);
          dispatch({ type: 'UPDATE_DATA', payload: vals });
          dispatch({ type: 'UPDATE_WAIT', payload: 'RECEIVED' });
        })
        .catch((err) => console.log(err.response));
    }
  };

  return (
    <React.Fragment>
      <Grid container spacing={3} alignItems='stretch'>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.fullDiv}>
            <Grid item container>
              <Grid item xs={12}>
                <Typography variant='h6' gutterBottom>
                  Algoritmos
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <List className={classes.listRoot}>
                  {[
                    'CILK',
                    'CHASELEV',
                    'IDEMPOTENT_FIFO',
                    'IDEMPOTENT_LIFO',
                    'IDEMPOTENT_DEQUE',
                    'WS_NC_MULT',
                    'B_WS_NC_MULT',
                    'WS_NC_MULT_LA',
                    'B_WS_NC_MULT_LA',
                    'NEW_B_WS_NC_MULT',
                    'NEW_B_WS_NC_MULT_LA'
                  ].map((algorithm) => {
                    const labelId = `checkbox-list-label-${algorithm}`;

                    return (
                      <ListItem
                        key={algorithm}
                        role={undefined}
                        dense
                        button
                        onClick={handleToggle(algorithm)}>
                        <ListItemIcon>
                          <Checkbox
                            edge='start'
                            checked={checked.indexOf(algorithm) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={labelId}
                          primary={
                            <Typography variant='subtitle2' gutterBottom>
                              {algorithm.replace('_', ' ')}
                            </Typography>
                          }
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item container xs={12} sm={6}>
          <Paper
            elevation={1}
            className={classes.fullDiv}
            style={{ minWidth: '100%' }}>
            <Grid item container>
              <Grid item xs={12}>
                <Typography
                  variant='h6'
                  gutterBottom
                  /* style={{ marginLeft: '20%' }} */
                >
                  Opciones
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <FormControl className={classes.formControl} variant='outlined'>
                  <InputLabel id='experimentos-select-label'>
                    Experimentos
                  </InputLabel>
                  <Select
                    labelId='experimentos-select-label'
                    value={experimento}
                    onChange={handleChangeAlg}
                    label='Experimentos'>
                    <MenuItem value=''>Selecciona una opción</MenuItem>
                    <MenuItem value='SPANNING_TREE'>Spanning Tree</MenuItem>
                    <MenuItem value='putSteals'>Puts steals</MenuItem>
                    <MenuItem value='putTakes'>Puts takes</MenuItem>
                    <MenuItem value='putTakesSteals'>
                      Puts takes steals
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {state.variant === 0 ? null : state.variant === 1 ? (
                <React.Fragment>
                  <Grid item xs={12}>
                    <FormControl
                      className={classes.formControl}
                      variant='outlined'>
                      <InputLabel id='sst-exp'>Step Spanning Tree</InputLabel>
                      <Select
                        id='select-sst'
                        value={stepSpanning}
                        onChange={handleChangeSS}
                        label='Step Spanning Tree'>
                        <MenuItem value=''>Selecciona una opción</MenuItem>
                        <MenuItem value='COUNTER'>Counter</MenuItem>
                        <MenuItem value='DOUBLE_COLLECT'>
                          Double Collect
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      className={classes.formControl}
                      variant='outlined'>
                      <InputLabel id='graph-exp'>Gráfica</InputLabel>
                      <Select
                        id='select-graph'
                        value={grafica}
                        onChange={handleChangeGraph}
                        label='Gráfica'>
                        <MenuItem value=''>Selecciona una opción</MenuItem>
                        <MenuItem value='TORUS_2D'>Torus 2D</MenuItem>
                        <MenuItem value='TORUS_2D_60'>Torus 2D 60%</MenuItem>
                        <MenuItem value='TORUS_3D'>Torus 3D</MenuItem>
                        <MenuItem value='TORUS_3D_40'>Torus 3D 40%</MenuItem>
                        <MenuItem value='RANDOM'>Random</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      style={{ width: '95%', marginLeft: 8, marginTop: 15 }}
                      value={vertexSize}
                      label='Vertex Size'
                      type='number'
                      onChange={(event) => setVertexSize(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      style={{ width: '95%', marginLeft: 8, marginTop: 15 }}
                      value={iterations}
                      label='Iterations'
                      type='number'
                      onChange={(event) => setIterations(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      style={{ width: '95%', marginLeft: 8, marginTop: 15 }}
                      value={structSize}
                      label='Struct Size'
                      type='number'
                      onChange={(event) => setStructSize(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      className={classes.formControl}
                      labelPlacement='end'
                      label='Directed'
                      control={
                        <Checkbox
                          checked={directed}
                          onChange={handleChangeDirected}
                          inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                      }
                    />
                  </Grid>
                </React.Fragment>
              ) : state.variant === 2 ? (
                <React.Fragment>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      style={{ width: '95%', marginLeft: 8, marginTop: 15 }}
                      value={operations}
                      label='Operations'
                      type='number'
                      onChange={(event) => setOperations(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      style={{ width: '95%', marginLeft: 8, marginTop: 15 }}
                      value={dsSize}
                      label='DataStructure Size'
                      type='number'
                      onChange={(event) => setDsSize(event.target.value)}
                    />
                  </Grid>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      style={{ width: '95%', marginLeft: 8, marginTop: 15 }}
                      value={operations}
                      label='Operations'
                      type='number'
                      onChange={(event) => setOperations(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      style={{ width: '95%', marginLeft: 8, marginTop: 15 }}
                      value={workers}
                      label='Workers'
                      type='number'
                      onChange={(event) => setWorkers(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      style={{ width: '95%', marginLeft: 8, marginTop: 15 }}
                      value={stealers}
                      label='Stealers'
                      type='number'
                      onChange={(event) => setStealers(event.target.value)}
                    />
                  </Grid>
                </React.Fragment>
              )}
              <Grid
                item
                xs={12}
                style={{ marginTop: state.variant > 1 && '15px' }}>
                <Button
                  variant='contained'
                  color='secondary'
                  /* size='small' */
                  disabled={state.variant === 0}
                  style={{ marginLeft: 7 }}
                  onClick={onSubmitExperiment}>
                  Ejecutar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Config;
