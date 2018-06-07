import rootReducer from '../reducers/root'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
export const history = createHistory();
const appRouterMiddleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware), applyMiddleware(appRouterMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store
