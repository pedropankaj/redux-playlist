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

const addTrackBtn = document.querySelector('.addTrack');
const trackInput = document.querySelector('.trackInput');

store.subscribe(() => {
  const list = document.querySelector('.list');

  list.innerHTML = '';

  store.getState().forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  });

  trackInput.value = '';
});

addTrackBtn.addEventListener('click', () => {
  store.dispatch({ type: ADD_TRACK, payload: trackInput.value });
});
