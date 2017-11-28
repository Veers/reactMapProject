import React, { Component } from 'react';
import CollapsibleItemList from './CollapsibleItemList';
import arrow from './arrow.png';
import './Collapsible.css'

class CollapsibleItem extends Component {
    constructor(props){
        super(props);
        this.state = {toggle: props.itemData.isToggleOn};
        this.toggleElement = this.toggleElement.bind(this);
    }

    toggleElement(){
        this.changeToggle(!this.state.toggle);
        this.forceUpdate();
        console.log("toggle");
    }

    changeToggle(status){
        this.setState({
            toggle: status
        });
    }

    render() {
        return (
            <div>
                <span className={"list_item_title " + (this.state.toggle ? "expanded_title" : "collapsed_title")} onClick={this.toggleElement}>
                <img className={"list_toggle_icon " + (this.state.toggle ? "arrow_expanded" : "arrow_collapsed")} src={arrow} alt="arrow_image"/>
                    {this.props.itemData._id}
                </span>
                <div className={(this.state.toggle ? "expanded_items" : "collapsed_items")} onClick={this.toggleElement}>
                    {this.props.itemData.data.map(function(item){
                        return <CollapsibleItemList listData={item} />    
                    })}
                </div>                
            </div>
        );
    }
}

export default CollapsibleItem;
