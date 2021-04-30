import './reset.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './app/store';
import App from './components/App';

const mountNode = document.getElementById('app');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  mountNode,
);
