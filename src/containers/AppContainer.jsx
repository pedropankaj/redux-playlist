import { connect } from 'react-redux';

import App from '../App';

import { addTrack } from '../actions/index';

function mapStateToProps(state) {
  return {
    trackList: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: track => dispatch(addTrack(track)),
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
