import { createStore } from 'redux';

import reducer from '../reducers/index';

const initialState = [
  'Smells like spirit',
  'Enter Sandman',
];

const store = createStore(reducer, initialState);

export default store;
