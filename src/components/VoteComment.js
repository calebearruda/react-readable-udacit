import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

class VoteComment extends Component {
  render() {
    return (
      <span>
        <Icon
          title="Up Vote"
          type="like"
          style={{ marginRight: 8, cursor: 'pointer' }}
          onClick={() => this.props.upVoteComment(this.props.comment_id)}
        />
        {this.props.text}
        <Icon
          title="Down Vote"
          type="dislike"
          style={{ marginLeft: 8, cursor: 'pointer' }}
          onClick={() => this.props.downVoteComment(this.props.comment_id)}
        />
      </span>
    )
  }
}

VoteComment.propTypes = {
  text: PropTypes.number,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  comment_id: PropTypes.string.isRequired
}

export default VoteComment
