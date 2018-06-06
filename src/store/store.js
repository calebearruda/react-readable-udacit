import rootReducer from '../reducers/root'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import createHistory from 'history/createBrowserHistory'
// import { combineReducers } from 'redux'
// import { routerReducer, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
// export const history = createHistory()
// const routerMidd = routerMiddleware(history)

const store = createStore(
  // combineReducers({
  //   ...rootReducer,
  //   router: routerReducer
  // }),
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store
