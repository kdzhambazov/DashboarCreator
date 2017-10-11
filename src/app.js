import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid";

class App extends React.Component {
    render() {
        const props = {
            rows: 2,
            cells: 4
        };

        return <Grid {...props}/>;
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
