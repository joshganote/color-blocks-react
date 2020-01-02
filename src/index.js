// React
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

// Redux 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleWare from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';

function* rootSaga() {
    yield takeEvery('GET_BLOCKS', getBlocks);
}

// SAGA
function* getBlocks() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/blocks'
        });
        yield put({
            type: 'SET_BLOCKS',
            payload: response.data
        });
    } catch (err) {
        console.log(`couldn't get blocks`, err);
    }
}

// REDUCER
const blocks = (state = [], action) => {
    switch (action.type) {
        case 'SET_BLOCKS':
            return action.payload;
        default:
            return state;
    }
}
const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
    combineReducers({
        blocks,
    }),
    applyMiddleware(logger, sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
