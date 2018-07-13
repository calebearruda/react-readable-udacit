import {
  COMMENTS_GET_ALL_BY_POST,
  COMMENTS_SET_COMMENTS,
  COMMENT_DELETE,
  UPDATE_DELETED_COMMENT,
  COMMENT_UP_VOTE,
  COMMENT_DOWN_VOTE,
  COMMENT_UPDATE_COMMENT_LIST,
  COMMENT_ADD,
  COMMENT_UPDATE
} from '../constants/actionTypes'

export const getAllCommentsByPost = post_id => ({
  type: COMMENTS_GET_ALL_BY_POST,
  post_id: post_id
})

export const setAllComments = comments => ({
  type: COMMENTS_SET_COMMENTS,
  comments: comments
})

export const deleteComment = comment_id => ({
  type: COMMENT_DELETE,
  comment_id
})

export const updateDeletedComment = comment => ({
  type: UPDATE_DELETED_COMMENT,
  comment
})

export const upVoteComment = comment_id => ({
  type: COMMENT_UP_VOTE,
  option: 'upVote',
  comment_id
})

export const downVoteComment = comment_id => ({
  type: COMMENT_DOWN_VOTE,
  option: 'downVote',
  comment_id
})

export const updateCommentList = comment => ({
  type: COMMENT_UPDATE_COMMENT_LIST,
  comment
})

export const addComment = comment => ({
  type: COMMENT_ADD,
  comment
})

export const updateComment = comment => ({
  type: COMMENT_UPDATE,
  comment
})
