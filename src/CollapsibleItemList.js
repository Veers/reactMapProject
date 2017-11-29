import React, { Component } from 'react';
import './Collapsible.css';
import './Collapsible-checkbox.css';

class CollapsibleItemList extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	        active: props.listData.active
        };
	    this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
        //
        this.setState({
            active: value
        });
    }

    render() {
        return (
            <div className="list_item_data">
            	<div className="squaredTwo">
            		<input type="checkbox" value="None" id="squaredTwo" name="check" checked={this.state.active} onChange={this.handleInputChange}/>
            		<label htmlFor="squaredTwo"></label>
            	</div>
    			<span className="list_item_data_text">{this.props.listData.name}</span>
    		</div>
        );
    }
}

export default CollapsibleItemList;
