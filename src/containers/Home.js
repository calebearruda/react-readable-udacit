import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../css/App.css'
import { Layout } from 'antd'
import SideMenu from './SideMenu'
import ListPosts from './ListPosts'
import PostDetail from './PostDetail'
const { Content, Footer } = Layout

class Home extends Component {
  render() {
    return (
      <div>
        <Layout className="fullHeight" >
          <SideMenu />
          <Layout>
            <Content className="margin-content">
              <Route exact path="/" component={ListPosts} />
              <Route exact path="/:category" render={props => <ListPosts {...props} />} />
              <Route path="/:category/:post_id" component={PostDetail} />
            </Content>
            <FooterView />
          </Layout>
        </Layout >
      </div>
    );
  }
}

const FooterView = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Calebe Arruda ©2018
    </Footer>
  )
}

export default Home