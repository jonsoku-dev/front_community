import { combineReducers } from 'redux';
import logReducer from './logReducer';
import studyReducer from './studyReducer';
import alertReducer from './alertReducer';
import authReducer from './authReducer';

export default combineReducers({
  log: logReducer,
  auth: authReducer,
  study: studyReducer,
  alert: alertReducer,
});
