import React, { Component } from 'react'
import { message } from 'antd'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'
import PostForm from '../components/PostForm'

class NewPost extends Component {
  state = {
    title: '',
    author: '',
    body: '',
    category: 'react'
  }

  handleChange = event => {
    if (event.target) {
      this.setState({ [event.target.name]: event.target.value })
    } else {
      this.setState({ category: event })
    }
  }

  handleSubmit = event => {
    const post = { ...this.state }
    this.props.addPost(post, this.props.typeOrderBy)
    message.success(`The post '${post.title}' was added with success!`, 10)
    this.resetState()
    event.preventDefault()
  }

  resetState = () => {
    this.setState({
      title: '',
      author: '',
      body: '',
      category: 'react'
    })
  }

  render() {
    return (
      <PostForm
        cardTitle="Insert new Post"
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        title={this.state.title}
        author={this.state.author}
        body={this.state.body}
        category={this.state.category}
        disabledCategory={false}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: (post, typeOrderBy) => dispatch(addPost(post, typeOrderBy))
  }
}

function mapStateToProps(state) {
  return {
    typeOrderBy: state.typeOrderBy
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost)
