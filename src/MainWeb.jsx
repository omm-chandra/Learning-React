import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import ContactUs from "./ContactUs";
import Navbar from "./Navbar";
import { Switch , Route , Redirect } from "react-router-dom";


const MainWeb = () => {
    return (
            <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Service" component={Service} />
                <Route exact path="/ContactUs" component={ContactUs} />
                <Redirect to="/" />
            </Switch>
            </>
    )
}

export default MainWeb;