import { combineReducers } from 'redux';
import { multistepReducer } from 'app/multistep-form';
import usersReducer from './slices/usersSlice';
import { integrationReducer } from './integration';

const rootReducer = () =>
  combineReducers({
    users: usersReducer,
    multistep: multistepReducer,
    integration: integrationReducer,
  });

export default rootReducer;
