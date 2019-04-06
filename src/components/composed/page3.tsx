import * as React from "react";
import withHeaderAndFooter from "../withHeaderAndFooter";
import withThings, { ThingsProps } from "../withThings";

interface Page3Props extends ThingsProps {
    text: string;
}

function Page3(props: Page3Props) {
    return (
        <>
            <p>{props.text}</p>
            <ul>
                {props.things.map(thing => (
                    <li key={thing}>{thing}</li>
                ))}
            </ul>
        </>
    );
}

export default withThings(withHeaderAndFooter(Page3, "Page 3"));
