import React from "react";
import ReactDOM from "react-dom";
import DashbordCreator from "./DashbordCreator";

class App extends React.Component {
    render() {      
		return <DashbordCreator />;
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
