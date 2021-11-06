import {changeTheNumber, Login} from './UpDown';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  changeTheNumber,
  // Login,
});

export default rootReducer;
