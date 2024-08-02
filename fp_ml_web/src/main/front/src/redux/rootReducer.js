import { combineReducers } from 'redux';
import filterReducer from './modules/filter';

const rootReducer = combineReducers({
  filter: filterReducer,
});

export default rootReducer;