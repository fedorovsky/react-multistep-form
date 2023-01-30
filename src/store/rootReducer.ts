import { combineReducers } from 'redux';
import usersReducer from './slices/usersSlice';
import { integrationReducer } from './integration';

const rootReducer = () =>
  combineReducers({
    users: usersReducer,
    integration: integrationReducer,
  });

export default rootReducer;
