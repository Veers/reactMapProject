import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import MapWrapper from './MapWrapper'
import LeftPanelMenu from './LeftPanelMenu'
import {AppBar} from "material-ui"

import '../../../styles/geoportal.scss'

import {setLayers} from "../modules/geoportal"

class Geoportal extends React.Component {
  static propTypes = {
    // counter: PropTypes.number.isRequired,
    // increment: PropTypes.func.isRequired,
    // doubleAsync: PropTypes.func.isRequired,
    // setLayers: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      menuVisibility: false,
      layers: []
    }
  }

  componentDidMount = () => {
    console.log("mounted")
    let _this = this;
    axios.get('http://gptl.ru/api/map/public/maps.json')
      .then(function(responce){
        let layers = responce.data[0].templates[0].layers
        console.log(responce.data[0].templates[0].layers)
        setLayers(layers)
        console.log(_this)
      })
      .catch(function(error){
        console.log(error)
      })
  }

  menuToggle = () => {}

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          className="topToolBar"
        />
        <LeftPanelMenu />
        <MapWrapper />
      </div>
    )
  }
}

export default Geoportal
