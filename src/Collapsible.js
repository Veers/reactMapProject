import React, {Component} from 'react';
import CollapsibleItem from './CollapsibleItem';
import './Collapsible.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Collapsible extends Component {
    constructor(props) {
        super(props);
        this.state = {visibility: false};
        this.toggleElement = this.toggleElement.bind(this);
    }

    toggleElement = () => this.changeToggle(!this.state.toggle);

    changeToggle = (status) => this.setState({visibility: status});

    render() {
        if (this.state.visibility)
            return (
                <div className="collapsible show">
                    <div className="list_header" onClick={this.toggleElement}>
                        {this.props.title}
                    </div>
                    <ul>
                        {this.props.data.map(function (item) {
                            return <li key={item._id} className="list_item">
                                <CollapsibleItem itemData={item}/>
                            </li>;
                        })}
                    </ul>
                </div>
            );
        else
            return (
                <div className="collapsible hidden" onClick={this.toggleElement}>
                </div>
            )
    }
}

export default Collapsible;
