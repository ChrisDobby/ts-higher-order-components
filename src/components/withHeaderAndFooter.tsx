import * as React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const withHeaderAndFooter = (Component: React.ComponentType) => (props: {}) => {
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
                <Component {...props} />
            </div>
            <footer className="app-footer">
                <div>This IS in a higher order component</div>
            </footer>
        </>
    );
};

export default withHeaderAndFooter;
