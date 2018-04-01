import React from "react";
import GridRow from "./GridRow";
import GridCell from "./GridCell";
import generateUid from "./utils/uniqueIdGenerator";

export default class Grid extends React.Component {
    buildRows() {
        let cells = [];
        let rowSpans = 0;
        let result = [];
        let children = this.props.children;

        children.forEach(function(element, index){
            let colSpan = element.colProps.colspan || 12;
            let colSpanNext = children[index + 1] ? children[index + 1].colProps.colspan : null;

            if (colSpan <= 12 - rowSpans) {
                cells.push(
                    <GridCell key={generateUid()} type={element.type}>
                        {element.children || []}
                    </GridCell>
                );
                rowSpans += colSpan;
            }

            if (!colSpanNext || colSpanNext > 12 - rowSpans) {
                result.push(
                    <GridRow key={generateUid()}>
                        {cells}
                    </GridRow>);
                cells = [];
                rowSpans = 0;
            }
        });
        return result;
    }

    render() {
        let rows = this.buildRows();
        return (
            <div className="grid">
                {rows}
            </div>
        );
    }
}