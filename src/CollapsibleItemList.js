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
        this.setState({
            active: value
        });
    }

    render() {
        return (
            <div className="list_item_data">
            	<div className="squaredTwo">
            		<input type="checkbox" id={"squaredTwo" + this.props.listData.name} value="None" name="check" 
            			checked={this.state.active} onChange={this.handleInputChange}/>
            		<label htmlFor={"squaredTwo" + this.props.listData.name}></label>
            	</div>
    			<span className="list_item_data_text">{this.props.listData.name}
    				{this.state.active ? (" registered at " + this.props.listData.registered) : ""}
    			</span>
    		</div>
        );
    }
}

export default CollapsibleItemList;
////(date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear())