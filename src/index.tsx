import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers'
import mySaga from './actions/saga'
import ReactDOM from 'react-dom'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
// then run the saga
sagaMiddleware.run(mySaga)

// render the application
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
