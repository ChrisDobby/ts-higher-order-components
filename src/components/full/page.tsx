import * as React from "react";
import getThings from "../../getThings";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

class Page extends React.Component {
    state = { things: [] as string[] };

    async componentDidMount() {
        const things = await getThings();
        this.setState({ things });
    }

    render() {
        return (
            <>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="app-menu">
                        <Link to="/">Home</Link>
                        <Link to="/page1">Composed page 1</Link>
                        <Link to="/page2">Composed page 2</Link>
                        <Link to="/page3">Composed page 3</Link>
                    </div>
                </header>
                <div className="app-body">
                    <p>This page has everything</p>
                    <ul>
                        {this.state.things.map(thing => (
                            <li key={thing}>{thing}</li>
                        ))}
                    </ul>
                </div>
                <footer className="app-footer">
                    <div>This is not in a higher order component</div>
                </footer>
            </>
        );
    }
}

export default Page;
