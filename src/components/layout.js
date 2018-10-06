import React from "react";
import SEO from "./seo";

import style from "./layout.module.css";
import logo from "../images/colored_small.png";

export default ({ children, navbar }) => {
    return (
        <>
            <SEO />

            {navbar && (
                <nav className={`navbar ${style.navbar}`} role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="https://latte-carousel.github.io">
                                <img src={logo} alt="LatteCarousel logo." /> LatteCarousel
                            </a>
                        </div>
                    </div>
                </nav>
            )}

            {children}

            <footer className={`footer ${style.footer}`}>
                <div className="container">
                    <a href="https://github.com/latte-carousel/latte-carousel">
                        Made with <i className="fas fa-heart" /> in SP
                    </a>
                </div>
            </footer>
        </>
    );
};
