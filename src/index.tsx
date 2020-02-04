import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers'
import ReactDOM from 'react-dom';


let store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

/**
const counter = (state = 0, action: { type: any; }) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT' :
            return state - 1;
        default:
            return state;
    }
}
const Counter = ({value, onIncrement, onDecrement}:{value:number, onIncrement: any, onDecrement: any}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
)

const store = createStore(counter);

const render = () => {
    ReactDOM.render(
        <Counter value={store.getState()}
        onIncrement={() => store.dispatch({type:'INCREMENT'})}
        onDecrement={() => store.dispatch({type:'DECREMENT'})}/>,
        document.getElementById('root')
    )
}
store.subscribe(render);
render();*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
