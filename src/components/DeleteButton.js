import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'

class DeleteButton extends React.Component {
  render() {
    return (
      <span>
        <Icon
          type="delete"
          title="Delete"
          style={{ cursor: 'pointer' }}
          onClick={() => this.props.deleteFunc(this.props.id)}
        />
      </span>
    )
  }
}

DeleteButton.propTypes = {
  deleteFunc: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default DeleteButton
