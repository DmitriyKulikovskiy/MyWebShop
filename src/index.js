import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// HashRouter using for ghPage, in other case use BrowserRouter

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
,document.getElementById('root'))


serviceWorker.unregister();
