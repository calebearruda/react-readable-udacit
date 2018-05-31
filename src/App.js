import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './css/App.css'
import { Layout, Breadcrumb } from 'antd'
import MyMenu from './components/MyMenu'
const { Header, Content, Footer } = Layout

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout className="fullHeight">
          <Route path="/" render={() => (
            <MyMenu />
          )} />
          <Layout>
            <Header />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Calebe Arruda ©2018
            </Footer>
          </Layout>
        </Layout>
      </div >
    );
  }
}

export default App;
