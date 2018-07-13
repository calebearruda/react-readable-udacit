import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Row, Col, Card, Select, Button } from 'antd'
const { TextArea } = Input

class PostForm extends Component {
  render() {
    return (
      <Card title={this.props.cardTitle}>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <Row type="flex" justify="start">
            <Col span={24}>
              <Input
                addonBefore="Title"
                value={this.props.title}
                style={{ marginBottom: 5 }}
                onChange={event => this.props.handleChange(event)}
                name="title"
                autoFocus={true}
              />
              <Input
                addonBefore="Author"
                disabled={this.props.disabledOnEdit}
                value={this.props.author}
                style={{ marginBottom: 5 }}
                onChange={event => this.props.handleChange(event)}
                name="author"
              />
              <TextArea
                value={this.props.body}
                name="body"
                placeholder="Body of the post..."
                rows={6}
                style={{ marginBottom: 5 }}
                onChange={event => this.props.handleChange(event)}
              />
              <Select
                disabled={this.props.disabledOnEdit}
                name="category"
                style={{ width: '100%', marginTop: 5 }}
                value={this.props.category}
                onChange={event => this.props.handleChange(event)}
              >
                <Select.Option value="react">react</Select.Option>
                <Select.Option value="redux">redux</Select.Option>
                <Select.Option value="udacity">udacity</Select.Option>
              </Select>
              <Button htmlType="submit" type="primary" style={{ marginTop: 5 }} size="large">
                Save
              </Button>
              {this.props.disabledOnEdit && (
                <Button
                  type="danger"
                  style={{ marginLeft: 10, marginTop: 5 }}
                  size="large"
                  onClick={() => this.props.goBack()}
                >
                  Back
                </Button>
              )}
            </Col>
          </Row>
        </form>
      </Card>
    )
  }
}

PostForm.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  disabledOnEdit: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  goBack: PropTypes.func
}

export default PostForm
