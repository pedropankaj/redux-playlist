import React from 'react';
import './App.css';

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
        <div>
          <input type="text" ref={(input) => { this.trackName = input; }} />
          <button onClick={this.handleAddTrack}>Add track</button>
        </div>
        <div>
          <input type="text" ref={(input) => { this.searchName = input; }} />
          <button onClick={this.handleFindTrack}>Find track</button>
        </div>
        <ul>
          {trackList.map(track =>
            <li key={track.id}>{track.name}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
