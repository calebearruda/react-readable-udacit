import { COMMENTS_SET_COMMENTS } from '../constants/actionTypes'

const commentReducer = (comments = [], action) => {
  switch (action.type) {
    case COMMENTS_SET_COMMENTS:
      return action.comments
    default:
      return comments
  }
}

export default commentReducer