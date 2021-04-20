import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import PageRouter from './apps/Router.js';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
  		<PageRouter />
  	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
