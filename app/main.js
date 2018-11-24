

// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import AppInstance from './containers/appinstance';
import store from './store';
import './style/base.scss';

// Main render; entry point.
let root = document.getElementById('root');
ReactDOM.render(<AppInstance store={store} />, root);