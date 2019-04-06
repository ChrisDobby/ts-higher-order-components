import * as React from "react";
import { Subtract } from "utility-types";
import getThings from "../getThings";

export interface ThingsProps {
    things: string[];
}

function withThings<T extends ThingsProps>(Component: React.ComponentType<T>) {
    return class extends React.Component<Subtract<T, ThingsProps>> {
        state = { things: [] as string[] };

        async componentDidMount() {
            const things = await getThings();
            this.setState({ things });
        }

        render() {
            return <Component {...this.props as T} things={this.state.things} />;
        }
    };
}

export default withThings;
