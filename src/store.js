import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];


//const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
    	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

const persistor = persistStore(store);

export { persistor, store };