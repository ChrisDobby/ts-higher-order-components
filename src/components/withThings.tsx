import * as React from "react";
import getThings from "../getThings";

export interface ThingsProps {
    things: string[];
}

function withThings<T>(Component: React.ComponentType<T & ThingsProps>) {
    return class extends React.Component<T> {
        state = { things: [] as string[] };

        async componentDidMount() {
            const things = await getThings();
            this.setState({ things });
        }

        render() {
            return <Component {...this.props} things={this.state.things} />;
        }
    };
}

export default withThings;
