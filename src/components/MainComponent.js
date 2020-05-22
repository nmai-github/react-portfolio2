import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Main; 