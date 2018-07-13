import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import '../css/App.css'
import { Layout } from 'antd'
import SideMenu from './SideMenu'
import ListPosts from './ListPosts'
import PostDetail from './PostDetail'
import NewPost from './NewPost'
import PostEdit from './PostEdit'
import { NoMatch } from '../components/NoMatch'
const { Content, Footer } = Layout

class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SideMenu />
          <Layout>
            <Content className="margin-content">
              <Switch>
                <Route exact path="/" component={ListPosts} />
                <Route exact path="/new" component={NewPost} />
                <Route exact path="/:category/:post_id/edit" component={PostEdit} />
                <Route exact path="/:category" render={props => <ListPosts {...props} />} />
                <Route exact path="/:category/:post_id" component={PostDetail} />
                <Route component={NoMatch} />
              </Switch>
            </Content>
            <FooterView />
          </Layout>
        </Layout>
      </div>
    )
  }
}

const FooterView = () => {
  return (
    <Footer style={{ textAlign: 'center', display: 'inline-block' }}>Calebe Arruda ©2018</Footer>
  )
}

export default Home
