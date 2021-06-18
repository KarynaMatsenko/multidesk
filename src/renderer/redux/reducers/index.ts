import { combineReducers } from 'redux';
import login from './login';
import adminWindow from './adminWindow';

export default combineReducers({ login, adminWindow });
