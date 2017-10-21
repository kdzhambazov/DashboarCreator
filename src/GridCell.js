import React from "react";
import Grid from "./Grid";
import DropZone from "./DropZone";
import { components } from "./Components";

console.log(components);

export default class GridCell extends React.Component {
    render() {
	 	let compMap = {
			grid: Grid,
			dropzone: DropZone
		};
		
        return (
            <div className="col-1">
            	{ React.createElement(compMap[this.props.content.type], {children: this.props.content.children}) }
            </div>
        );
    }
}

GridCell.displayName = "GridCell";