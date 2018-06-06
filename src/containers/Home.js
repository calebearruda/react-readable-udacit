import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../css/App.css'
import { Layout } from 'antd'
import SideMenu from './SideMenu'
import ListPosts from './ListPosts'
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
              <Route path="/:category" component={ListPosts} />
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

function mapDispatchToProps(dispatch) {
  return {}
}

function mapStateToProps(state) {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))