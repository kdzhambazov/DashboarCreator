import React from "react";
import PropTypes from "prop-types";
import Popover from "./Popover";
import Grid from "./Grid";

export default class DashbordCreator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gridProps: {}
        };

        this.onPopoverClick = this.onPopoverClick.bind(this);
    }

    onPopoverClick(popoverData) {
        this.setState({
            gridProps: popoverData
        })
    }

    render() {
        if(this.state.gridProps.hasOwnProperty("rows") && this.state.gridProps.hasOwnProperty("cells")) {
            return (
                <Grid {...this.state.gridProps}/>
            );
        }

        return (
            <Popover onCreate={this.onPopoverClick}/>
        );
    }
}

DashbordCreator.displayName = "DashbordCreator";
