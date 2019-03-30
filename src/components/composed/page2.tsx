import * as React from "react";
import withThings, { ThingsProps } from "../withThings";

interface Page2Props extends ThingsProps {}

function Page2(props: Page2Props) {
    return (
        <div className="app-body">
            <p>This page does not have headers or footers</p>
            <ul>
                {props.things.map(thing => (
                    <li key={thing}>{thing}</li>
                ))}
            </ul>
        </div>
    );
}

export default withThings(Page2);
