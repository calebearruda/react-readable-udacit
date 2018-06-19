import { SET_POST_SELECTED, POST_CLEAN_POST_SELECTED } from '../constants/actionTypes'

const postSelectedReducer = (post = {}, action) => {
  switch (action.type) {
    case SET_POST_SELECTED:
      return action.post
    case POST_CLEAN_POST_SELECTED:
      return {}
    default:
      return post
  }
}

export default postSelectedReducer
