import React from "react";
import Layout from "../components/layout";
import Carousel from "../components/carousel";

import style from "./index.module.css";
import logo from "../images/colored_small.png";

const npm = "https://www.npmjs.com/package/latte-carousel";
const github = "https://github.com/latte-carousel/latte-carousel";

export default () => {
    return (
        <Layout navbar={false}>
            <section className={`hero is-medium ${style.hero}`}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-size-1-desktop has-text-weight-light">
                            <img src={logo} alt="LatteCarousel logo." /> LatteCarousel
                        </h1>
                        <h2 className="subtitle has-text-weight-light">
                            A lightweight and responsive carousel without any dependencies
                        </h2>

                        <div className={`buttons has-addons is-centered ${style.buttons}`}>
                            <a href="#get-started" className={`button is-selected ${style.isSelected}`}>
                                Get Started
                            </a>
                            <a href={npm} className="button">
                                NPM
                            </a>
                            <a href={github} className="button">
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${style.features}`}>
                <div className="container has-text-centered">
                    <div className="columns is-multiline">
                        <div className={`column is-half ${style.column}`}>
                            <i className={`fas fa-mobile ${style.mobile}`} />
                            <p className="title is-size-5 has-text-weight-normal">Responsive Options</p>
                            <p className="subtitle is-size-6 has-text-weight-light">
                                Customize options for each breakpoint
                            </p>
                        </div>

                        <div className={`column is-half ${style.column}`}>
                            <i className={`fas fa-hand-point-up ${style.touch}`} />
                            <p className="title is-size-5 has-text-weight-normal">Touch Support</p>
                            <p className="subtitle is-size-6 has-text-weight-light">
                                Compatible with desktop and mobile devices
                            </p>
                        </div>

                        <div className={`column is-half ${style.column}`}>
                            <i className={`fab fa-js-square ${style.javascript}`} />
                            <p className="title is-size-5 has-text-weight-normal">JavaScript Only</p>
                            <p className="subtitle is-size-6 has-text-weight-light">
                                No additional dependencies needed
                            </p>
                        </div>

                        <div className={`column is-half ${style.column}`}>
                            <i className={`fab fa-chrome ${style.browser}`} />
                            <p className="title is-size-5 has-text-weight-normal">Browser Support</p>
                            <p className="subtitle is-size-6 has-text-weight-light">
                                Works on any ES5 and CSS3 browser
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${style.carousel}`}>
                <div className="container">
                    <Carousel />
                </div>
            </section>
        </Layout>
    );
};
