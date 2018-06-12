import { TYPE_OF_ORDER_CHANGE } from '../constants/actionTypes'

const typesOfOrderReducer = (typeOfOrder = 'category', action) => {
  switch (action.type) {
    case TYPE_OF_ORDER_CHANGE:
      return action.typeOrderBy
    default:
      return typeOfOrder
  }
}

export default typesOfOrderReducer