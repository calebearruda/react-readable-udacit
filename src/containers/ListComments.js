import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getAllCommentsByPost,
  deleteComment,
  upVoteComment,
  downVoteComment
} from '../actions/commentActions'
import DeleteButton from '../components/DeleteButton'
import { Card, Icon } from 'antd'
import VoteComment from '../components/VoteComment'
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
        {comments.length > 0 ? (
          comments.map(comment => (
            <Card
              type="inner"
              style={{ marginTop: 2 }}
              key={comment.id}
              actions={[
                <VoteComment
                  text={comment.voteScore}
                  comment_id={comment.id}
                  upVoteComment={this.props.upVoteComment}
                  downVoteComment={this.props.downVoteComment}
                />,
                <Icon type="edit" />,
                <DeleteButton id={comment.id} deleteFunc={this.props.deleteComment} />
              ]}
            >
              <Meta
                style={{ paddingBottom: 5 }}
                description={`Created by ${comment.author} at ${new Date(
                  comment.timestamp
                ).toLocaleString('pt-BR', { hour12: false })}`}
              />
              {comment.body}
            </Card>
          ))
        ) : (
          <p>No comments available</p>
        )}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCommentsByPost: post_id => dispatch(getAllCommentsByPost(post_id)),
    deleteComment: comment_id => dispatch(deleteComment(comment_id)),
    upVoteComment: comment_id => dispatch(upVoteComment(comment_id)),
    downVoteComment: comment_id => dispatch(downVoteComment(comment_id))
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListComments)
