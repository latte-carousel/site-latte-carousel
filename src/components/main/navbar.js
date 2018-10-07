import React from "react";

import style from "./navbar.module.css";
import logo from "../../images/colored_small.png";

export default () => {
    return (
        <nav className={`navbar ${style.navbar}`} role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://latte-carousel.github.io">
                        <img src={logo} alt="LatteCarousel logo." /> LatteCarousel
                    </a>
                </div>
            </div>
        </nav>
    );
};
