import { combineReducers } from 'redux';
import { firstReducer } from './first';
import { secondReducer } from './second';

export const integrationReducer = combineReducers({
  first: firstReducer,
  second: secondReducer,
});
