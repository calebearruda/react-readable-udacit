import React, { Component } from 'react'
import * as ReadableAPI from '../util/ReadableAPI'
import book from '../img/book.svg'
import '../css/App.css'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout
const { SubMenu } = Menu

class MyMenu extends Component {
  state = {
    collapsed: false,
    theme: 'dark',
    categories: []
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  componentDidMount() {
    ReadableAPI.getAllCategories().then((categories) => {
      this.setState({ categories: categories })
    })
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
          <Menu theme={this.state.theme} mode="inline" >
            <SubMenu key="categories" title={<span><Icon type="book" /><span>Categories</span></span>}>
              <Menu.Item key="all">all</Menu.Item>
              {this.state.categories.map((categorie) => (
                <Menu.Item key={categorie.name}>{categorie.name}</Menu.Item>
              ))}
            </SubMenu>
          </Menu>
        </Sider>
      </div>
    )
  }
}

export default MyMenu