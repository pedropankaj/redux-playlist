import { connect } from 'react-redux';

import Track from '../components/Track';

function mapStateToProps(state, ownProps) {
  return {
    track: state.tracks.find(track => Number(track.id) === Number(ownProps.match.params.id)),
  };
}

const TrackContainer = connect(mapStateToProps)(Track);

export default TrackContainer;
