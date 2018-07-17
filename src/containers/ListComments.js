import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getAllCommentsByPost,
  deleteComment,
  upVoteComment,
  downVoteComment
} from '../actions/commentActions'
import DeleteButton from '../components/DeleteButton'
import { Icon, List, Button } from 'antd'
import VoteComment from '../components/VoteComment'
import CommentDetail from './CommentDetail'

class ListComments extends Component {
  state = {
    newComment: false,
    editingComment: false,
    comment: {}
  }

  componentDidMount() {
    this.props.getAllCommentsByPost(this.props.post_id)
  }

  newComment = () => {
    this.setState({ newComment: true })
  }

  editingComment = comment => {
    this.setState({ editingComment: true, comment: comment })
  }

  resetNewComment = () => {
    this.setState({ newComment: false })
  }

  resetEditingComment = () => {
    this.setState({ editingComment: false, comment: {} })
  }

  render() {
    const { comments } = this.props
    return (
      <div>
        <h3>
          Comments ({comments.length})
          <Button
            type="primary"
            icon="plus-circle-o"
            title="Add new comment"
            onClick={() => this.newComment()}
            style={{ margin: 15 }}
          />
        </h3>
        {this.state.newComment && (
          <CommentDetail
            newComment={this.state.newComment}
            reset={this.resetNewComment}
            parentId={this.props.post_id}
          />
        )}
        {this.state.editingComment && (
          <CommentDetail
            newComment={this.state.newComment}
            comment={this.state.comment}
            reset={this.resetEditingComment}
          />
        )}
        {comments.length > 0 ? (
          <List
            itemLayout="horizontal"
            dataSource={comments}
            renderItem={item => (
              <List.Item
                actions={[
                  <VoteComment
                    text={item.voteScore}
                    comment_id={item.id}
                    upVoteComment={this.props.upVoteComment}
                    downVoteComment={this.props.downVoteComment}
                  />,
                  <Icon type="edit" onClick={() => this.editingComment(item)} />,
                  <DeleteButton id={item.id} deleteFunc={this.props.deleteComment} goBack={false} />
                ]}
              >
                <List.Item.Meta
                  title={`Created by ${item.author} at ${new Date(item.timestamp).toLocaleString(
                    'pt-BR',
                    { hour12: false }
                  )}`}
                  description={item.body}
                />
              </List.Item>
            )}
          />
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
