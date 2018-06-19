import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

class PostVote extends Component {
  render() {
    return (
      <span>
        <Icon
          title="Up Vote"
          type={this.props.type1}
          style={{ marginRight: 8, cursor: 'pointer' }}
          onClick={() => this.props.upVotePost(this.props.post, this.props.typeOrderBy)}
        />
        {this.props.text}
        <Icon
          title="Down Vote"
          type={this.props.type2}
          style={{ marginLeft: 8, cursor: 'pointer' }}
          onClick={() => this.props.downVotePost(this.props.post, this.props.typeOrderBy)}
        />
      </span>
    )
  }
}

PostVote.propTypes = {
  type1: PropTypes.string.isRequired,
  type2: PropTypes.string.isRequired,
  typeOrderBy: PropTypes.string.isRequired,
  text: PropTypes.number,
  upVotePost: PropTypes.func.isRequired,
  downVotePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

PostVote.defaultProps = {
  typeOrderBy: 'category'
}

export default PostVote
