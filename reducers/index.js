import {changeTheNumber, Login} from './UpDown';
import {combineReducers} from 'redux';
import UserReducer from '../reducers/User';
import LoginReducer from '../reducers/Login';
import MyProfileInfoReducer from './MyProfileInfo';
import UserClick from './UserClick';
import UserClickName from './UserClickName';

const rootReducer = combineReducers({
  changeTheNumber,
  UserReducer,
  // Login,
  LoginReducer,
  MyProfileInfoReducer,
  UserClick,
  UserClickName,
});

export default rootReducer;
