import React, {Component} from 'react';
import Drawer from '../../node_modules/material-ui/Drawer';
import MenuItem from '../../node_modules/material-ui/MenuItem';
import IconButton from '../../node_modules/material-ui/IconButton'
import ActionList from 'material-ui/svg-icons/action/list';

import './LeftPanel.css'

class LeftPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div className="leftPanelToggleButton">
                <IconButton onClick={this.handleToggle}>
                    <ActionList />
                </IconButton>
                <Drawer open={this.state.open}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default LeftPanel;
