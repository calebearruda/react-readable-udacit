import { POSTS_ALL_BY_CATEGORY, POSTS_ALL, POSTS_SET_POSTS } from '../constants/actionTypes'

export const getAllPosts = () => ({
  type: POSTS_ALL
})

export const getPostsByCategory = (category) => ({
  type: POSTS_ALL_BY_CATEGORY,
  category: category
})

export const setPosts = (posts) => ({
  type: POSTS_SET_POSTS,
  posts: posts
})