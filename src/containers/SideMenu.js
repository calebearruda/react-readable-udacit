import React, { Component } from 'react'
import book from '../img/book.svg'
import { connect } from 'react-redux'
import { getAllCategories } from '../actions/categoryActions'
import '../css/App.css'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout
const { SubMenu } = Menu

class SideMenu extends Component {
  state = {
    collapsed: false,
    theme: 'dark'
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  componentDidMount() {
    this.props.getAllCategories()
  }

  render() {
    return (
      <div>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className="fullHeight"
        >
          <img src={book} alt="Readable Logo" className="logo" title="Readable" />
          <Menu theme={this.state.theme} mode="inline" className="menu-align" >
            <SubMenu key="categories" title={<span><Icon type="book" /><span>Categories</span></span>}>
              <Menu.Item key="all">
                <Link to="/">all</Link>
              </Menu.Item>
              {this.props.categories.map((categorie) => (
                <Menu.Item key={categorie.name}>
                  <Link to={categorie.name}>
                    {categorie.name}
                  </Link>
                </Menu.Item>
              ))}
            </SubMenu>
          </Menu>
        </Sider>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCategories: () => dispatch(getAllCategories())
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)