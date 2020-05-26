import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={ store }>
    <App />
    </Provider>,
  document.getElementById('root')
);


