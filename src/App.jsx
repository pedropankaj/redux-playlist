import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick = () => {
    const { onAdd } = this.props;

    onAdd(this.trackName.value);

    this.trackName.value = '';
  };

  render() {
    const { trackList } = this.props;

    return (
      <div>
        <input type="text" ref={(input) => { this.trackName = input; }} />
        <button onClick={this.handleClick}>Add track</button>
        <ul>
          {trackList.map((track, index) =>
            <li key={index}>{track}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
