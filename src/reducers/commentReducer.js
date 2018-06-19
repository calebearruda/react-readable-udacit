import {
  COMMENTS_SET_COMMENTS,
  UPDATE_DELETED_COMMENT,
  COMMENT_UPDATE_COMMENT_LIST
} from '../constants/actionTypes'
import _ from 'lodash'

const commentReducer = (comments = [], action) => {
  switch (action.type) {
    case COMMENTS_SET_COMMENTS:
      return sortComments(action.comments)
    case UPDATE_DELETED_COMMENT:
      return sortComments(comments.filter(c => c.id !== action.comment.id))
    case COMMENT_UPDATE_COMMENT_LIST:
      return sortComments([...comments.filter(c => c.id !== action.comment.id), action.comment])
    default:
      return comments
  }
}

function sortComments(comments) {
  return _.orderBy(comments, 'timestamp', 'desc')
}

export default commentReducer
