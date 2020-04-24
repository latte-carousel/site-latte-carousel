import React from "react";

import style from "./hero.module.css";
import logo from "../../images/colored_small.png";

const npm = "https://www.npmjs.com/package/latte-carousel";
const github = "https://github.com/latte-carousel/latte-carousel";

export default () => {
    return (
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
    );
};
