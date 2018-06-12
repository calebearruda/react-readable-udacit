import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCommentsByPost } from '../actions/commentActions'
import { Card, Icon } from 'antd'
const { Meta } = Card

class ListComments extends Component {

  componentDidMount() {
    this.props.getAllCommentsByPost(this.props.post_id)
  }

  render() {
    const { comments } = this.props
    return (
      <div>
        <h3>Comments ({comments.length})</h3>
        {comments.length > 0 ?
          comments.map(comment => (
            <Card type="inner"
              style={{ marginTop: 2 }}
              key={comment.id}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
              <Meta
                style={{ paddingBottom: 5 }}
                description={`Created by ${comment.author} at ${new Date(comment.timestamp).toLocaleString('pt-BR', { hour12: false })}`}
              />
              {comment.body}
            </Card>
          ))
          : <p>No comments available</p>}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCommentsByPost: (post_id) => dispatch(getAllCommentsByPost(post_id))
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComments)