import React, { Component } from 'react';
import { Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container content">
                    <div class="row row-content align-items-center">
                        <div class="col">
                            <h2>About Us</h2>
                            <p>Do you love to snack as much as we do? Do you prefer gluten-free snacks, or are you just looking for
                            healthy snack ideas packed with protein
                            and not too much sugar? Whether you are a foodie looking for new ideas, or a busy
                    professional, there’s a healthy snack on our website for everyone.</p>
                            <p>We created this website to help you in your search for healthy snacks.
                            Not only did we provide you with a list of our favorite snacks, but we have also included some that
                    you might be interested in. 
                </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;