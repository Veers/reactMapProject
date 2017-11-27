import React, {Component} from 'react';
import CollapsibleItem from './CollapsibleItem';
import './Collapsible.css'

class Collapsible extends Component {
    render() {
        return (
            <div className="collapsible">
                <div className="list_header">
                    {this.props.title}
                </div>
                <ul>
                    {this.props.data.map(function (item) {
                        return <li className="list_item">
                            <span className="list_item_title">{item._id}</span>
                            <CollapsibleItem itemData={item}/>
                        </li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default Collapsible;
