import React from 'react'
import { Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux'
import store, { history } from './store/store'
import './css/index.css'
import Home from './containers/Home'
import registerServiceWorker from './util/registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={Home} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
