import React from "react";
import createByType from "./utils/componentFactory";

export default class GridCell extends React.Component {
    render() {
        let cellContent = createByType(this.props.type, {children: this.props.children});
        console.log("Rendering cell content: ", cellContent);

        return (
            <div className="col-1">
                { cellContent }
            </div>
        );
    }
}