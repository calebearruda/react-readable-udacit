import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

class PostCommentIcon extends Component {
  render() {
    return (
      <span>
        <Icon type={this.props.type} style={{ marginRight: 8, marginLeft: 8 }} />
        {this.props.text}
      </span>
    )
  }
}

PostCommentIcon.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.number.isRequired
}

export default PostCommentIcon