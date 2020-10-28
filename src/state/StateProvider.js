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
    SIMPLE: '#53CFDA',
    CHASELEV: '#FF7994',
    CILK: '#FFC900',
    IDEMPOTENT_DEQUE: '#FF8860',
    IDEMPOTENT_FIFO: '#F1C9C2',
    IDEMPOTENT_LIFO: '#FF3747',
    NBWSMULT_FIFO: '#FF8D0F',
    WS_NC_MULT: '#FF458F',
    WS_NC_MULT_LA: '#FF8352',
    B_NBWSMULT_FIFO: '#DEE500',
    B_WS_NC_MULT: '#00E1DF',
    B_WS_NC_MULT_LA: '#00C3AF',
    NEW_B_WS_NC_MULT: '#4FCBBB',
    NEW_B_WS_NC_MULT_LA: '#2994CC'
  },
  rawResponse: {},
  wait: 'WAIT',
  variant: 0
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
