import * as React from "react";
import withHeaderAndFooter from "../withHeaderAndFooter";
import withThings from "../withThings";

interface Page3Props {
    things: string[];
}

function Page3(props: Page3Props) {
    return (
        <>
            <p>This page has everything via higher order components</p>
            <ul>
                {props.things.map(thing => (
                    <li key={thing}>{thing}</li>
                ))}
            </ul>
        </>
    );
}

export default withThings(withHeaderAndFooter(Page3));
