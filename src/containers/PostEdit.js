import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from '../components/PostForm'
import { updatePost } from '../actions/postActions'
import { message } from 'antd'

class PostEdit extends Component {
  state = {
    title: '',
    author: '',
    body: '',
    category: ''
  }

  componentDidMount() {
    this.setState({ ...this.props.location.state.post })
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
    this.props.updatePost(post, this.props.typeOrderBy)
    message.success(`The post '${post.title}' was save with success!`, 7)
    event.preventDefault()
  }

  render() {
    return (
      <PostForm
        cardTitle="Editing the post"
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        title={this.state.title}
        author={this.state.author}
        body={this.state.body}
        category={this.state.category}
        disabledOnEdit={true}
        goBack={this.props.history.goBack}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updatePost: (post, typeOrderBy) => dispatch(updatePost(post, typeOrderBy))
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
)(PostEdit)
