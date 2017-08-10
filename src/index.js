import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';


import AppContainer from './containers/AppContainer';
import TrackContainer from './containers/TrackContainer';
import About from './components/About';

import store, { history } from './store/index';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <div>
        <Route path="/" component={AppContainer} />
        <Route path="/about" component={About} />
        <Route path="/tracks/:id" component={TrackContainer} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
