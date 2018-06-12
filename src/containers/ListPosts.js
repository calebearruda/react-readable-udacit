import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Radio, Icon } from 'antd'
import { getPostsByCategory, getAllPosts, orderByPosts } from '../actions/postActions'
import { updateTypeOfOrderBy } from '../actions/typeOfOrderByActions'
import PostList from './PostList'
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class ListPosts extends Component {
  componentDidMount() {
    this.fetchInformationAPI()
  }

  fetchInformationAPI = () => {
    const { url } = this.props.match
    if (url === "/") {
      this.props.getAllPosts(this.props.typeOrderBy)
    } else {
      this.props.getPostsByCategory(this.props.match.params.category, this.props.typeOrderBy)
    }
  }

  componentDidUpdate(prevPros, prevState) {
    const prevUrl = prevPros.match.url
    const { url } = this.props.match

    if (url !== prevUrl) {
      this.fetchInformationAPI()
    }

    if (prevPros.typeOrderBy !== this.props.typeOrderBy) {
      this.props.orderByPosts(this.props.typeOrderBy)
    }
  }

  onChangeTypeOrderBy = (event) => {
    this.props.updateTypeOfOrderBy(event.target.value)
  }

  render() {
    return (
      <div style={{ padding: 24, background: '#fff', textAlign: 'left' }}>
        <Icon type="filter" title="Order By" style={{ marginRight: '2%' }} />
        <RadioGroup onChange={this.onChangeTypeOrderBy} defaultValue={this.props.typeOrderBy} size="small">
          <RadioButton value="category">Category</RadioButton>
          <RadioButton value="timestamp">Date</RadioButton>
          <RadioButton value="voteScore">Vote Score</RadioButton>
        </RadioGroup>
        <PostList posts={this.props.posts} typeOrderBy={this.props.typeOrderBy} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPostsByCategory: (category, typeOrderBy) => dispatch(getPostsByCategory(category, typeOrderBy)),
    getAllPosts: (typeOrderBy) => dispatch(getAllPosts(typeOrderBy)),
    orderByPosts: (sortBy) => dispatch(orderByPosts(sortBy)),
    updateTypeOfOrderBy: (typeOrderBy) => dispatch(updateTypeOfOrderBy(typeOrderBy))
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    typeOrderBy: state.typeOrderBy
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)