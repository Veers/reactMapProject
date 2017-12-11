import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import MapWrapper from './MapWrapper'
import LeftPanelMenu from './LeftPanelMenu'
import MapButtons from './MapButtons'
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
      menuVisibility: false
    }
    this.toggleLeftMenu = this.toggleLeftMenu.bind(this);
  }

  componentDidMount = () => {
    console.log("mounted")
    let _this = this;
    axios.get('http://gptl.ru/api/map/public/maps.json')
      .then(function(responce){
        let layersData = responce.data[0].templates[0].layers
        console.log(responce.data[0].templates[0].layers)
        setLayers(layersData)
        console.log(_this)
        _this.setState({layers: layersData})
      })
      .catch(function(error){
        console.log(error)
      })
  }

  toggleLeftMenu = () => {this.setState(prevState => ({
      menuVisibility: !prevState.menuVisibility
    }))}

  toggle2 = () => {console.log("toggleMeny22")}

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.toggleLeftMenu}
          className="topToolBar"
        />
        <LeftPanelMenu layers={this.state.layers} visibility={this.state.menuVisibility} />
        <MapWrapper />
        <MapButtons />
      </div>
    )
  }
}

export default Geoportal
