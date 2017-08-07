import { FIND_TRACK } from '../actions/actionTypes';

import initialState from '../store/initialState.json';

export default function filter(state = initialState.filter, action) {
  switch (action.type) {
    case FIND_TRACK:
      return action.filter;

    default:
      return state;
  }
}