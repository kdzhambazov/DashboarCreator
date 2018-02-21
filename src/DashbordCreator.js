import React from "react";
import Grid from "./Grid";
import { Store } from "./Store";

export default class DashbordCreator extends React.Component {
    render() {
        return (
            <Grid children={Store.children} />
        );
    }
}
