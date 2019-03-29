import * as React from "react";
import withHeaderAndFooter from "../withHeaderAndFooter";

function Page1() {
    return <p>This page does not get any data</p>;
}

export default withHeaderAndFooter(Page1);
