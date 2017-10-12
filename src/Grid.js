import React from "react";
import PropTypes from "prop-types";
import GridRow from "./GridRow";
import GridCell from "./GridCell";
import "./style/style.css";

export default class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            configuration: {}
        };
    }
    componentWillMount() {
        let props = this.props;

        this.setState({
            configuration: {
                type: "Grid",
                properties: {
                    row: props.rows,
                    cols: props.cells
                }
            }
        });
    }

    buildChildren() {
        let result = [];
        let props = this.props;

        for (let i = 0; i < props.rows; i++) {
            let gridCells = [];

            for (let j = 0; j < props.cells; j++) {
                gridCells.push(<GridCell key={j} />);
            }

            result.push(
                <GridRow key={i}>
                    {gridCells}
                </GridRow>
            );
        }

        return result;
    }

    render() {
        let children = this.buildChildren();
        return (
            <div className="grid-container outline">
                {children}
            </div>
        );
    }
}

Grid.displayName = "Grid";

Grid.propTypes = {
    rows: PropTypes.number.isRequired,
    cells: PropTypes.number.isRequired
};
