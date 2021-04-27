import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import reportWebVitals from './reportWebVitals';
import PageRouter from './apps/Router.js';
import { persistor, store } from './store';

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
  		<PersistGate loading={null} persistor={persistor}>
  			<PageRouter />
  		</PersistGate>
  	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
