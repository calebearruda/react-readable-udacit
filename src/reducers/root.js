import { combineReducers } from 'redux'
import category from './categoryReducer'
import post from './postReducer'

const rootReducer = combineReducers({
  categories: category,
  posts: post
})

export default rootReducer