import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import './css/index.css'
import Home from './containers/Home'
import registerServiceWorker from './util/registerServiceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route path="/" component={Home} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
