import React from "react";
import GridRow from "./GridRow";
import "./style/style.css";

export default class Grid extends React.Component {
    buildRows() {
        let result = [];
        let props = this.props;

        for (let i = 0; i < props.children.length; i++) {
            let rowProps = {
                key: i,
                children: props.children[i].children
            };

            result.push(
                <GridRow {...rowProps} />
            )
        };        

        return result;
    }

    render() {
        let rows = this.buildRows();
        return (
            <div className="grid-container outline">
                {rows}
            </div>
        );
    }
}

Grid.displayName = "Grid";