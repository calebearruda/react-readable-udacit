import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import category from './categoryReducer'
import post from './postReducer'

const rootReducer = combineReducers({
  categories: category,
  posts: post,
  router: routerReducer
})

export default rootReducer