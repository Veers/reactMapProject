import React from 'react'

import 'ol/ol.css'
import OpenlayersMap from 'ol/map'
import OpenlayersLayerTile from 'ol/layer/tile'
import OpenlayersSourceOSM from 'ol/source/osm'
import OpenlayersView from 'ol/view'

class MapWrapper extends React.Component {
  static propTypes = {
    // counter: PropTypes.number.isRequired,
    // increment: PropTypes.func.isRequired,
    // doubleAsync: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    let map = new OpenlayersMap({
      target: 'map',
      layers: [
        new OpenlayersLayerTile({
          source: new OpenlayersSourceOSM()
        })
      ],
      view: new OpenlayersView({
        center: [0, 0],
        zoom: 4
      })
    })
  }

  render () {
    return (
      <div id='map' />
    )
  }
}

export default MapWrapper
