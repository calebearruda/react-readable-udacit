import React, { Component } from 'react'
import { List, Icon } from 'antd'
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
        loading={this.state.loading}
        dataSource={this.props.posts}
        renderItem={item => (
          <Item
            key={item.title}
            actions={[<IconVote type1="up" type2="down" text={item.voteScore} />, <IconComment type="message" text={item.commentCount} />]}
          >
            <Meta
              title={item.title}
              description={`Created by ${item.author} at ${new Date(item.timestamp).toLocaleString('pt-BR', { hour12: false })}`}
            />
          </Item>
        )}
      />
    )
  }
}

const IconVote = ({ type1, type2, text }) => (
  <span>
    <Icon type={type1} style={{ marginRight: 8 }} />
    {text}
    <Icon type={type2} style={{ marginLeft: 8 }} />
  </span>
)

const IconComment = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default PostList