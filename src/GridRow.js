import React from "react";

export default class GridRow extends React.Component {
    render() {
        return (
            <div className="row">
            	{this.props.children}
            </div>
        );
    }
}
