import { idGenerate } from './helpers'
const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random.toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getAllPostsByCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json)

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const addPost = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...post,
      'timestamp': Date.now(),
      'id': idGenerate()
    })
  }).then(res => res.json())

export const getPostById = (post) =>
  fetch(`${api}/posts/${post.id}`)
    .then(res => res.json())

/*
* Vote options: upVote or downVote
*/
export const voteOnPost = (post, vote) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  }).then(res => res.json())

export const updatePost = (post) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'title': post.title,
      'body': post.body
    })
  }).then(res => res.json())

export const deletePost = (post) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())

export const getAllCommentsByPost = (post) =>
  fetch(`${api}/posts/${post.id}/comments`, headers)
    .then(res => res.json())

export const addComment = (comment, parentId) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...comment,
      'timestamp': Date.now(),
      'id': idGenerate(),
      'parentId': parentId
    })
  }).then(res => res.json())

export const getCommentById = (comment) =>
  fetch(`${api}/comments/${comment.id}`)
    .then(res => res.json())

/*
* Vote options: upVote or downVote
*/
export const voteOnComment = (comment, vote) =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  }).then(res => res.json())

export const updateComment = (comment) =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'body': comment.body,
      'timestamp': Date.now()
    })
  }).then(res => res.json())

export const deleteComment = (comment) =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())