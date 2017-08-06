import { ADD_TRACK } from './actionTypes';

export function addTrack(track) {
  return {
    type: ADD_TRACK,
    payload: track,
  };
}
