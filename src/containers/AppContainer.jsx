import { connect } from 'react-redux';

import App from '../App';

import { addTrack, findTrack, getTracks } from '../actions/index';

function mapStateToProps(state) {
  return {
    trackList: state.tracks.filter(track => track.name.includes(state.filter)),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: track => dispatch(addTrack(track)),
    onFind: track => dispatch(findTrack(track)),
    handleGetTracks: () => dispatch(getTracks()),
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
