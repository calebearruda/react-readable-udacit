import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'  
import { withRouter } from 'react-router'

class DeleteButton extends React.Component {

  deleteAction = () => {
    this.props.deleteFunc(this.props.id)
    if(this.props.goBack) {
      this.props.history.goBack()
    }
  }

  render() {
    return (
      <span>
        <Icon
          type="delete"
          title="Delete"
          style={{ cursor: 'pointer', marginLeft: this.props.marginLeft }}
          onClick={this.deleteAction}
        />
      </span>
    )
  }
}

DeleteButton.propTypes = {
  deleteFunc: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  goBack: PropTypes.bool.isRequired
}

export default withRouter(DeleteButton)
