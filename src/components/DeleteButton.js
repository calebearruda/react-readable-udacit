import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'
// import { withRouter } from 'react-router-dom'

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

DeleteButton.protpropTypesotype = {
  deleteFunc: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

// export default withRouter(DeleteButton)
export default DeleteButton
