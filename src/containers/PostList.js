import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { List, Tag, Icon } from 'antd'
import { upVotePost, downVotePost, deletePost } from '../actions/postActions'
import PostVote from '../components/PostVote'
import PostCommentIcon from '../components/PostCommentIcon'
import DeleteButton from '../components/DeleteButton'
const { Item } = List
const { Meta } = Item

class PostList extends Component {
  state = {
    loading: true
  }

  componentWillReceiveProps() {
    this.setState({
      loading: false
    })
  }

  render() {
    return (
      <List
        itemLayout="vertical"
        size="small"
        locale={{ emptyText: 'No posts available' }}
        loading={this.state.loading}
        dataSource={this.props.posts}
        renderItem={item => (
          <Item
            key={item.title}
            actions={[
              <PostVote
                type1="like"
                type2="dislike"
                text={item.voteScore}
                post={item}
                upVotePost={this.props.upVotePost}
                downVotePost={this.props.downVotePost}
                typeOrderBy={this.props.typeOrderBy}
              />,
              <PostCommentIcon type="message" text={item.commentCount} />,
              <Link
                to={{
                  pathname: `/${item.category}/${item.id}/edit`,
                  state: { post: item }
                }}
                style={{ color: '#5f5f5f', textDecoration: 'none' }}
              >
                <Icon type="edit" title="Edit the post" />
              </Link>,
              <DeleteButton id={item.id} deleteFunc={this.props.deletePost} goBack={false} />
            ]}
          >
            <Meta
              title={<Link to={`${item.category}/${item.id}`}>{item.title}</Link>}
              description={`Created by ${item.author} at ${new Date(item.timestamp).toLocaleString(
                'pt-BR',
                { hour12: false }
              )}`}
            />
            <Tag color="blue">{item.category}</Tag>
          </Item>
        )}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upVotePost: (post, typeOrderBy) => dispatch(upVotePost(post, typeOrderBy)),
    downVotePost: (post, typeOrderBy) => dispatch(downVotePost(post, typeOrderBy)),
    deletePost: post_id => dispatch(deletePost(post_id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(PostList)
