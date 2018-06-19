import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Tag } from 'antd'
import {
  upVotePost,
  downVotePost,
  loadPostSelected,
  cleanPostSelected
} from '../actions/postActions'
import PostVote from '../components/PostVote'
import ListComments from '../containers/ListComments'
const { Meta } = Card

class PostDetail extends Component {
  componentDidMount() {
    const { post_id } = this.props.match.params
    this.props.loadPostSelected(post_id)
  }

  componentWillUnmount() {
    this.props.cleanPostSelected()
  }

  render() {
    const { post } = this.props

    return (
      <Card
        className="ant-layout-detail"
        title={post.title}
        key={post.id}
        extra={[
          <PostVote
            key={post.id + 'postVote'}
            type1="like"
            type2="dislike"
            text={post.voteScore}
            post={post}
            upVotePost={this.props.upVotePost}
            downVotePost={this.props.downVotePost}
          />
        ]}
      >
        <Meta
          title={
            <Tag className="tag-post-detail" color="blue">
              {post.category}
            </Tag>
          }
          description={`Created by ${post.author} at ${new Date(post.timestamp).toLocaleString(
            'pt-BR',
            { hour12: false }
          )}`}
        />
        <p>{post.body}</p>
        <ListComments post_id={post.id} key={post.timestamp} />
      </Card>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.postSelected
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upVotePost: (post, typeOrderBy) => dispatch(upVotePost(post, typeOrderBy)),
    downVotePost: (post, typeOrderBy) => dispatch(downVotePost(post, typeOrderBy)),
    loadPostSelected: post_id => dispatch(loadPostSelected(post_id)),
    cleanPostSelected: () => dispatch(cleanPostSelected())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)
