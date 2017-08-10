import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import reducer from '../reducers/index';
import initialState from './initialState.json';

export const history = createHistory();

const historyMiddleware = routerMiddleware(history);

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, historyMiddleware)),
);

export default store;
