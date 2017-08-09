import { ADD_TRACK, FIND_TRACK, FETCH_TRACKS_SUCCESS } from './actionTypes';

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

const mockApiData = [
  {
    id: '1502135247241',
    name: 'Enter Sandman 2',
  },
  {
    id: '1502135255050',
    name: 'Welcome Home',
  },
  {
    id: '1502135261193',
    name: 'Master of Puppets',
  },
  {
    id: '1502135268513',
    name: 'Fade to Black',
  },
  {
    id: '1502135276592',
    name: 'Nothing Else Matters',
  },
];

export function getTracks() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: FETCH_TRACKS_SUCCESS,
        tracks: mockApiData,
      });
    }, 1000);
  };
}
