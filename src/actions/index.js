import { ADD_TRACK, FIND_TRACK } from './actionTypes';

export function addTrack(track) {
  return {
    type: ADD_TRACK,
    track,
  };
}

export function findTrack(track) {
  return {
    type: FIND_TRACK,
    filter: track,
  };
}
