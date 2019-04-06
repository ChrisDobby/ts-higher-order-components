import * as React from "react";
import withHeaderAndFooter from "../withHeaderAndFooter";

interface Page1Props {
    text: string;
}

function Page1(props: Page1Props) {
    return <p>{props.text}</p>;
}

export default withHeaderAndFooter(Page1, "Page 1");
