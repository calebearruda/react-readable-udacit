import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentForm from '../components/CommentForm'
import { addComment, updateComment } from '../actions/commentActions'
import PropTypes from 'prop-types'
import { message } from 'antd'

class CommentDetail extends Component {
  state = {
    author: '',
    body: '',
    parentId: '',
    id: ''
  }

  componentDidMount() {
    if (this.props.comment) {
      this.setState({ ...this.props.comment })
    } else {
      this.setState({ parentId: this.props.parentId })
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    if (this.props.newComment) {
      const comment = { ...this.state }
      this.props.addComment(comment)
    } else {
      let comment = this.props.comment
      comment.body = this.state.body
      this.props.updateComment(comment)
    }
    message.success(
      `The comment was ${this.props.newComment ? 'added' : 'saved'} with success!`,
      10
    )
    this.resetState()
    this.props.reset()
    event.preventDefault()
  }

  resetState = () => {
    this.setState({
      author: '',
      body: '',
      parentId: ''
    })
  }

  render() {
    return (
      <CommentForm
        author={this.state.author}
        body={this.state.body}
        cardTitle={this.props.newComment ? 'Add new comment' : 'Edit the comment'}
        disabledOnEdit={!this.props.newComment}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

CommentDetail.propTypes = {
  comment: PropTypes.object,
  newComment: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  parentId: PropTypes.string
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: comment => dispatch(addComment(comment)),
    updateComment: comment => dispatch(updateComment(comment))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CommentDetail)
