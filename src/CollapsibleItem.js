import React, { Component } from 'react';
import './Collapsible.css'

class CollapsibleItem extends Component {
    render() {
        return (
            <div>
                {this.props.itemData.name}

            </div>
        );
    }
}

export default CollapsibleItem;
