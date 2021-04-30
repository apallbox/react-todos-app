import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import './reset.css';
import './index.css';

const mountNode = document.getElementById('app');

ReactDOM.render(<App />, mountNode);
