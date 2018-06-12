import { call, put, takeEvery } from 'redux-saga/effects';
import { setAllCategories } from '../actions/categoryActions';
import { setPosts, updatePostList, setPostSelected } from '../actions/postActions';
import { setAllComments } from '../actions/commentActions'
import * as actions from '../constants/actionTypes';
import * as API from '../util/ReadableAPI';

function* fetchCategories(action) {
  const categories = yield call(API.getAllCategories)
  yield put(setAllCategories(categories))
}

function* fetchAllPosts(action) {
  const posts = yield call(API.getAllPosts)
  yield put(setPosts(posts, action.typeOrderBy))
}

function* fetchPostsByCategory(action) {
  const { category } = action
  const posts = yield call(API.getAllPostsByCategory, category)
  yield put(setPosts(posts, action.typeOrderBy))
}

function* fetchUpVotePost(action) {
  const { post, option } = action
  const postUpdated = yield call(API.voteOnPost, post, option)
  yield put(updatePostList(postUpdated, action.typeOrderBy))
  yield put(setPostSelected(postUpdated))
}

function* fetchDownVotePost(action) {
  const { post, option } = action
  const postUpdated = yield call(API.voteOnPost, post, option)
  yield put(updatePostList(postUpdated, action.typeOrderBy))
  yield put(setPostSelected(postUpdated))
}

function* fetchPostById(action) {
  const { post_id } = action
  const post = yield call(API.getPostById, post_id)
  yield put(setPostSelected(post))
}

function* fetchAllCommentsByPost(action) {
  const { post_id } = action
  const comments = yield call(API.getAllCommentsByPost, post_id)
  yield put(setAllComments(comments))
}

export default function* rootSaga() {
  yield takeEvery(actions.CATEGORIES_FETCH_ALL, fetchCategories)
  yield takeEvery(actions.POSTS_ALL, fetchAllPosts)
  yield takeEvery(actions.POSTS_ALL_BY_CATEGORY, fetchPostsByCategory)
  yield takeEvery(actions.POSTS_UP_VOTE, fetchUpVotePost)
  yield takeEvery(actions.POSTS_DOWN_VOTE, fetchDownVotePost)
  yield takeEvery(actions.COMMENTS_GET_ALL_BY_POST, fetchAllCommentsByPost)
  yield takeEvery(actions.LOAD_POST_SELECTED, fetchPostById)
}