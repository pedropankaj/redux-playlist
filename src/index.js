import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import AppContainer from './containers/AppContainer';
import TrackContainer from './containers/TrackContainer';
import About from './components/About';

import store from './store/index';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={AppContainer} />
        <Route path="/about" component={About} />
        <Route path="/tracks/:id" component={TrackContainer} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
