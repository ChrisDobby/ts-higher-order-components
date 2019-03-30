import * as React from "react";
import getThings from "../getThings";

export interface ThingsProps {
    things: string[];
}

const withThings = (Component: React.ComponentType<ThingsProps>) =>
    class extends React.Component {
        state = { things: [] as string[] };

        async componentDidMount() {
            const things = await getThings();
            this.setState({ things });
        }

        render() {
            return <Component {...this.props} things={this.state.things} />;
        }
    };

export default withThings;
