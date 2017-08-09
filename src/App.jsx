import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import Menu from './components/Menu';

class App extends React.Component {
  handleAddTrack = () => {
    const { onAdd } = this.props;

    onAdd(this.trackName.value);

    this.trackName.value = '';
  };

  handleFindTrack = () => {
    const { onFind } = this.props;

    onFind(this.searchName.value);
  };

  render() {
    const { trackList } = this.props;

    return (
      <div>
        <Menu />
        <div>
          <input type="text" ref={(input) => { this.trackName = input; }} />
          <button onClick={this.handleAddTrack}>Add track</button>
        </div>
        <div>
          <input type="text" ref={(input) => { this.searchName = input; }} />
          <button onClick={this.handleFindTrack}>Find track</button>
        </div>
        <div>
          <button onClick={this.props.handleGetTracks}>Get tracks</button>
        </div>
        <ul>
          {trackList.map(track => (
            <li key={track.id}>
              <Link to={`/tracks/${track.id}`}>{track.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
