import React from 'react'
import {FloatingActionButton, RaisedButton} from "material-ui";
import ActionHome from 'material-ui/svg-icons/action/home';

class MapButtons extends React.Component {
  static propTypes = {
    // counter: PropTypes.number.isRequired,
    // increment: PropTypes.func.isRequired,
    // doubleAsync: PropTypes.func.isRequired,
  }

  render () {
    return (

      <FloatingActionButton mini={true} className="mapButton">
        <i class="material-icons">list</i>
      </FloatingActionButton>
    )
  }
}

export default MapButtons
