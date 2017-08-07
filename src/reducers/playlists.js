import {
  ADD_PLAYLIST,
  DELETE_PLAYLIST,
} from '../actions/actionTypes';

import initialState from '../store/initialState.json';

export default function playlists(state = initialState.playlists, action) {
  switch (action.type) {
    case ADD_PLAYLIST:
      return [...state];

    case DELETE_PLAYLIST:
      return [...state];

    default:
      return state;
  }
}
