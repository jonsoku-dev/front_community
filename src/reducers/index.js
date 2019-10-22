import { combineReducers } from 'redux';
import logReducer from './logReducer';
import studyReducer from './studyReducer';

export default combineReducers({
  log: logReducer,
  study: studyReducer,
});
