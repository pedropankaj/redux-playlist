import { ADD_TRACK } from '../actions/actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TRACK:
      return [...state, action.payload];

    default:
      return state;
  }
}
