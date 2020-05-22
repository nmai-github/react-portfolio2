import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <React.Fragment> 
                <div className="content">
                    <div className="row row-content pt-0">
                        <div className="col">
                            <div id="homeCarousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-12 col-sm-5 mt-5 offset-1"><img src="/assets/images/laiki.png"
                                                alt="Laiki Rice Crackers" /></div>
                                            <div className="col-12 col-sm-5 mt-5 ml-5 pt-5">
                                                <h2 className="font-weight-bold red">Laiki Rice Crackers</h2>
                                                <p className="fs-18 mr-5">Laiki Rice rackers are rich in flavor and made to crunchy
                                        perfection. Made from three simple, natural ingredients: rice, oil & salt.</p>
                                                <a className="btn btn-danger"
                                                    href="https://www.laikicrackers.com/product/laiki-rice-crackers-4-flavor-variety-bundle-3-53-ounces-pack-of-4/"
                                                    target="_blank" role="button">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center text-white small">
                                ©2020 Healthy Snacks. All Rights Reserved.
                </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Home;