import {
  FETCH_TRACKS_SUCCESS,
  ADD_TRACK,
  DELETE_TRACK,
} from '../actions/actionTypes';

import initialState from '../store/initialState.json';

export default function tracks(state = initialState.tracks, action) {
  switch (action.type) {
    case FETCH_TRACKS_SUCCESS:
      return [
        ...state,
        ...action.tracks,
      ];

    case ADD_TRACK:
      return [
        ...state,
        {
          id: Date.now().toString(),
          name: action.track,
        },
      ];

    case DELETE_TRACK:
      return [...state];

    default:
      return state;
  }
}
