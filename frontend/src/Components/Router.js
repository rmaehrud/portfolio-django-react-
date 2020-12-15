import React from "react";
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import Header from "./Header";
import index from "../Routes/index/index";
import about from "../Routes/about";
import work_1 from "../Routes/detail/work_1";

export default () => {
    return (
        <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={index} />
                    <Route path="/about" component={about} />
                    <Route path="/work_1" component={work_1} />
                    <Redirect from="*" to="/" />
                </Switch>
        </Router>
    );
};
