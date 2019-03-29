import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import Routes from "./routes";

ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById("root"),
);
