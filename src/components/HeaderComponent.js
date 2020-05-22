import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark pl-5 pr-5 sticky-top">
                    <a className="navbar-brand mr-5" href="index.html"><img src="/assets/images/logo.jpg" width="100" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active mr-4">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item mr-4">                               
                                <Link to="/about" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                            <button className="btn btn-primary my-2 my-sm-0 ml-2" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Header;