import { combineReducers } from 'redux';
import clockReducer from './clock_reducer.js';

const rootReducer = combineReducers({ //this is how to build state in redux
  clock: clockReducer
});

export default rootReducer;
