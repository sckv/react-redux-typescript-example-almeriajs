import {combineReducers, createStore} from 'redux';

import {reducers} from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore(
  combineReducers(reducers),
  {},
  composeEnhancers(),
);
