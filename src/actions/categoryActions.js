import { CATEGORIES_FETCH_ALL, CATEGORIES_SET_ALL } from '../constants/actionTypes'

export const getAllCategories = () => ({
  type: CATEGORIES_FETCH_ALL
})

export const setAllCategories = (categories) => ({
  type: CATEGORIES_SET_ALL,
  categories: categories
})