import * as React from "react";
import { Route } from "react-router-dom";
import FullPage from "./components/full/page";
import Page1 from "./components/composed/page1";
import Page2 from "./components/composed/page2";
import Page3 from "./components/composed/page3";

function Routes() {
    return (
        <div className="app">
            <Route exact path="/" component={FullPage} />
            <Route exact path="/page1" render={() => <Page1 text="This page does not get any data" />} />
            <Route exact path="/page2" component={Page2} />
            <Route
                exact
                path="/page3"
                render={() => <Page3 text="This page has everything via higher order components" />}
            />
        </div>
    );
}

export default Routes;
