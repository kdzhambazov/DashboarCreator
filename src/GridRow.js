import React from "react";
import GridCell from "./GridCell";

export default class GridRow extends React.Component {
    render() {
        return (
            <div className="row">
            	{this.props.children}
            </div>
        );
    }
}
