// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore } from 'redux';

const ADD_TRACK = 'ADD_TRACK';

function playlist(state = [], action) {
  // console.log(action);
  switch (action.type) {
    case ADD_TRACK:
      return [...state, action.payload];

    default:
      return state;
  }
}

const store = createStore(playlist);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: ADD_TRACK, payload: 'Smells like spirit' });
store.dispatch({ type: ADD_TRACK, payload: 'Enter sandman' });
