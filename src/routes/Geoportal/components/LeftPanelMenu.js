import React from 'react'
import PropTypes from 'prop-types'
import {Drawer, MenuItem} from "material-ui";

class LeftPanelMenu extends React.Component {
  static propTypes = {
    visibility: PropTypes.bool.isRequired
    // counter: PropTypes.number.isRequired,
    // increment: PropTypes.func.isRequired,
    // doubleAsync: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      visibility: false
    }
  }


  render () {
    return (
      <div>
        <Drawer open={this.props.visibility}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default LeftPanelMenu
