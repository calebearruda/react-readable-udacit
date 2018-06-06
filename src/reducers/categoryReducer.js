import { CATEGORIES_SET_ALL } from '../constants/actionTypes'

const categoryReducer = (categories = [], action) => {
  switch (action.type) {
    case CATEGORIES_SET_ALL:
      return action.categories
    default:
      return categories
  }
}

export default categoryReducer