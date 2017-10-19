import React from "react";
import PropTypes from "prop-types";

export default class Popover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.updateState = this.updateState.bind(this);
    }

    updateState(event) {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        })
    }

    render() {
        return (
            <div className="popover">
                <h3 className="popover-title">Grid Size</h3>
                <div className="popover-content">
                    rows: <input type="text" name="rows" onChange={this.updateState} /><br />
                    cells: <input type="text" name="cells" onChange={this.updateState} /><br />
                    <button type="button" onClick={
                        () => {
                            this.props.onCreate(this.state);
                        }
                    }>Create Grid</button>
                </div>
            </div>
        );
    }
}

Popover.displayName = "Popover";