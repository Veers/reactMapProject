import React, {Component} from 'react';
import ol_map from './../../node_modules/ol/map';
import ol_layer_Tile from './../../node_modules/ol/layer/tile';
import ol_source_OSM from './../../node_modules/ol/source/osm';
import ol_View from './../../node_modules/ol/view';
import './../../node_modules/ol/ol.css';
import './EMap.css';

class EMap extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let olMap = new ol_map({
            target: 'map',
            layers: [
                new ol_layer_Tile({
                    source: new ol_source_OSM()
                })
            ],
            view: new ol_View({
                center: [0, 0],
                zoom: 0
            })
        });
    }

    render() {
        return (
            <div id="map">
            </div>
        );
    }
}

export default EMap;
