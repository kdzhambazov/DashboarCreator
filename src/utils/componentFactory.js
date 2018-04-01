import React from "react";
import {components} from "../Components";

export default function createByType(type, props) {
    let componentToCreate = components[type];

    return React.createElement(componentToCreate.default, props);
}

// 0884 999 985 - Todor