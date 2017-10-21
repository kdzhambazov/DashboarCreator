import React from "react";
import Grid from "./Grid";
import GridRow from "./GridRow";
import GridCell from "./GridCell";
import Popover from "./Popover";


class BaseComponent extends React.Component {
    Grid() {
    	return Grid;
    }

    GridRow() {
    	return GridRow;
    }

    GridCell() {
    	return GridCell;
    }

    Popover() {
    	return Popover;
    }
}

let base = BaseComponent;

export { base };