import { POSTS_SET_POSTS } from '../constants/actionTypes'

const postReducer = (posts = [], action) => {
  switch(action.type) {
    case POSTS_SET_POSTS:
      return action.posts ? action.posts : posts
    default:
      return posts
  }
}

export default postReducer