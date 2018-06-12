import { TYPE_OF_ORDER_CHANGE } from '../constants/actionTypes'

export const updateTypeOfOrderBy = (typeOrderBy) => ({
  type: TYPE_OF_ORDER_CHANGE,
  typeOrderBy: typeOrderBy
})