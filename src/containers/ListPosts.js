import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getPostsByCategory, getAllPosts } from '../actions/postActions'
import PostList from './PostList'

class ListPosts extends Component {
  componentDidMount() {
    const { path } = this.props.match
    if (path === "/") {
      this.props.getAllPosts()
    } else {
      this.props.getPostsByCategory(this.props.match.params.category)
    }
  }

  render() {
    return (
      <div style={{ padding: 24, background: '#fff', textAlign: 'left' }}>
        <PostList posts={this.props.posts} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPostsByCategory: (category) => dispatch(getPostsByCategory(category)),
    getAllPosts: () => dispatch(getAllPosts())
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListPosts))