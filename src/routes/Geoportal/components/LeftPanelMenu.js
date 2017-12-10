import React from 'react'
import {Drawer, MenuItem, RaisedButton} from "material-ui";

class LeftPanelMenu extends React.Component {
  static propTypes = {
    // counter: PropTypes.number.isRequired,
    // increment: PropTypes.func.isRequired,
    // doubleAsync: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
  }


  render () {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer open={true}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default LeftPanelMenu
