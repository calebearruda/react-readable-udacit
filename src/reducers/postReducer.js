import {
  POSTS_SET_POSTS,
  POSTS_ORDER_BY,
  POSTS_UPDATE_POST_LIST,
  UPDATE_DELETED_POST
} from '../constants/actionTypes'
import _ from 'lodash'

const postReducer = (posts = [], action) => {
  switch (action.type) {
    case POSTS_SET_POSTS:
      return sortPosts(action.posts, action.typeOrderBy)
    case POSTS_ORDER_BY:
      return sortPosts(posts, action.sortBy)
    case POSTS_UPDATE_POST_LIST:
      const { post } = action
      return sortPosts([...posts.filter(p => p.id !== post.id), post], action.typeOrderBy)
    case UPDATE_DELETED_POST:
      return posts.filter(p => p.id !== action.post.id)
    default:
      return posts
  }
}

const sortPosts = (posts, sortBy) => {
  const typeOrder = sortBy === 'voteScore' ? 'desc' : 'asc'
  return _.orderBy(posts, [sortBy], typeOrder)
}

export default postReducer
