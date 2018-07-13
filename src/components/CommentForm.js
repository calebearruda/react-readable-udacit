import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Row, Col, Card, Button } from 'antd'
const { TextArea } = Input

class CommentForm extends Component {
  render() {
    return (
      <Card title={this.props.cardTitle}>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <Row type="flex" justify="start">
            <Col span={24}>
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
                placeholder="Body of the comment..."
                rows={6}
                style={{ marginBottom: 5 }}
                onChange={event => this.props.handleChange(event)}
              />
              <Button htmlType="submit" type="primary" style={{ marginTop: 5 }} size="large">
                Save
              </Button>
              {/* {this.props.disabledOnEdit && (
                <Button
                  type="danger"
                  style={{ marginLeft: 10, marginTop: 5 }}
                  size="large"
                  onClick={() => this.props.goBack()}
                >
                  Cancel
                </Button>
              )} */}
            </Col>
          </Row>
        </form>
      </Card>
    )
  }
}

CommentForm.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  disabledOnEdit: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default CommentForm
