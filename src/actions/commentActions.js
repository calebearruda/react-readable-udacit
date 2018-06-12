import { COMMENTS_GET_ALL_BY_POST, COMMENTS_SET_COMMENTS } from '../constants/actionTypes'

export const getAllCommentsByPost = (post_id) => ({
  type: COMMENTS_GET_ALL_BY_POST,
  post_id: post_id
})

export const setAllComments = (comments) => ({
  type: COMMENTS_SET_COMMENTS,
  comments: comments
})