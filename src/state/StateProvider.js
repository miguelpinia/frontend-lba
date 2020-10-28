import React from 'react';

const initialState = {
  data: [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    }
  ],
  algs: [],
  colors: {
    SIMPLE: '#2e1f54',
    CHASELEV: '#52057f',
    CILK: '#bf033b',
    IDEMPOTENT_DEQUE: '#f00a36',
    IDEMPOTENT_FIFO: '#ed3b21',
    IDEMPOTENT_LIFO: '#ff6908',
    NBWSMULT_FIFO: '#ffc719',
    WS_NC_MULT: '#598c14',
    WS_NC_MULT_LA: '#335238',
    B_NBWSMULT_FIFO: '#4a8594',
    B_WS_NC_MULT: '#051736',
    B_WS_NC_MULT_LA: '#706357',
    NEW_B_WS_NC_MULT: '#b0a6946',
    NEW_B_WS_NC_MULT_LA: '#2e9df7'
  },
  rawResponse: {},
  wait: 'WAIT',
  variant: 0,
  bardata: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return { ...state, data: action.payload };
    case 'UPDATE_ALGS':
      return { ...state, algs: action.payload };
    case 'UPDATE_RAW':
      return { ...state, rawResponse: action.payload };
    case 'UPDATE_WAIT':
      return { ...state, wait: action.payload };
    case 'UPDATE_VARIANT':
      return { ...state, variant: action.payload };
    case 'UPDATE_BARDATA':
      return { ...state, bardata: action.payload };
    default:
      throw new Error(`Acción no soportada ${action.type}`);
  }
};

export const StateContext = React.createContext({});

export const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const properties = { state, dispatch };
  return (
    <StateContext.Provider value={properties}>{children}</StateContext.Provider>
  );
};
