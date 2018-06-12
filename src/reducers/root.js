import { combineReducers } from 'redux'
import category from './categoryReducer'
import post from './postReducer'
import typesOfOrderReducer from './typesOfOrderReducer'
import commentReducer from './commentReducer'
import postSelectedReducer from './postSelectedReducer'

const rootReducer = combineReducers({
  typeOrderBy: typesOfOrderReducer,
  categories: category,
  posts: post,
  postSelected: postSelectedReducer,
  comments: commentReducer
})

export default rootReducer