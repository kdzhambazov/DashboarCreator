import React from "react";
import GridCell from "./GridCell";

export default class GridRow extends React.Component {
	buildCells() {
        let result = [];
        let props = this.props;

        for (let index = 0; index < props.children.length; index++) {
            let cellProps = {
            	key: index,
                content: props.children[index]
            };

            result.push(
                <GridCell {...cellProps} />
            )
        };        

        return result;
    }

    render() {
    	let cells = this.buildCells();
        return (
            <div className="row">
            	{cells}
            </div>
        );
    }
}

GridRow.displayName = "GridRow";
