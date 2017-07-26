import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import regReducer from './reg_reducer';

export default combineReducers({
  auth: authReducer,
  reg: regReducer
});
