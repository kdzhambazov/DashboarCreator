import React from "react";
import createByType from "./utils/componentFactory";

export default class GridCell extends React.Component {
    render() {
        let cellContent = createByType(this.props.content.type, {children: this.props.content.children});
        console.log("Rendering cell content: ", cellContent);

        return (
            <div className="col-1">
                { cellContent }
            </div>
        );
    }
}
