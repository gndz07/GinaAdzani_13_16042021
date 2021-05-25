import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session'
import login from './login.js';

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer =  combineReducers({
	login: login,
});

export default persistReducer(persistConfig, rootReducer);