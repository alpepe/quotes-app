import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainLayout from './components/layouts/MainLayout';
import * as serviceWorker from './serviceWorker';
import './static/styles/main.css';

const rootElement = document.getElementById('root')

ReactDOM.render(
        <Provider store={store}>
            <MainLayout />
        </Provider>,
    rootElement
    )
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
