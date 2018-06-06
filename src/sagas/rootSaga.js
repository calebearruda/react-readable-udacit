import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from '../constants/actionTypes'
import { setAllCategories } from '../actions/categoryActions'
import { setPosts } from '../actions/postActions'
import * as API from '../util/ReadableAPI'

function* fetchCategories(action) {
  const categories = yield call(API.getAllCategories)
  yield put(setAllCategories(categories))
}

function* fetchAllPosts(action) {
  const posts = yield call(API.getAllPosts)
  yield put(setPosts(posts))
}

function* fetchPostsByCategory(action) {
  const { category } = action
  const posts = yield call(API.getAllPostsByCategory, category)
  yield put(setPosts(posts))
}

export default function* rootSaga() {
  yield takeEvery(actions.CATEGORIES_FETCH_ALL, fetchCategories)
  yield takeEvery(actions.POSTS_ALL, fetchAllPosts)
  yield takeEvery(actions.POSTS_ALL_BY_CATEGORY, fetchPostsByCategory)
}