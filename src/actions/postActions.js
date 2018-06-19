import {
  POSTS_ALL_BY_CATEGORY,
  POSTS_ALL,
  POSTS_SET_POSTS,
  POSTS_ORDER_BY,
  POSTS_UP_VOTE,
  POSTS_DOWN_VOTE,
  POSTS_UPDATE_POST_LIST,
  SET_POST_SELECTED,
  LOAD_POST_SELECTED,
  DELETE_POST,
  UPDATE_DELETED_POST,
  POST_CLEAN_POST_SELECTED
} from '../constants/actionTypes'

export const getAllPosts = typeOrderBy => ({
  type: POSTS_ALL,
  typeOrderBy: typeOrderBy
})

export const getPostsByCategory = (category, typeOrderBy) => ({
  type: POSTS_ALL_BY_CATEGORY,
  category: category,
  typeOrderBy: typeOrderBy
})

export const setPosts = (posts, typeOrderBy) => ({
  type: POSTS_SET_POSTS,
  posts: posts,
  typeOrderBy: typeOrderBy
})

export const orderByPosts = sortBy => ({
  type: POSTS_ORDER_BY,
  sortBy: sortBy
})

export const upVotePost = (post, typeOrderBy) => ({
  type: POSTS_UP_VOTE,
  option: 'upVote',
  post: post,
  typeOrderBy: typeOrderBy
})

export const downVotePost = (post, typeOrderBy) => ({
  type: POSTS_DOWN_VOTE,
  option: 'downVote',
  post: post,
  typeOrderBy: typeOrderBy
})

export const updatePostList = (post, typeOrderBy) => ({
  type: POSTS_UPDATE_POST_LIST,
  post: post,
  typeOrderBy: typeOrderBy
})

export const setPostSelected = post => ({
  type: SET_POST_SELECTED,
  post: post
})

export const loadPostSelected = post_id => ({
  type: LOAD_POST_SELECTED,
  post_id: post_id
})

export const cleanPostSelected = () => ({
  type: POST_CLEAN_POST_SELECTED
})

export const deletePost = post_id => ({
  type: DELETE_POST,
  post_id: post_id
})

export const updateDeletedPost = post => ({
  type: UPDATE_DELETED_POST,
  post: post
})
