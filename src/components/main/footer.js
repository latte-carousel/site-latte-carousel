import React from "react";

import style from "./footer.module.css";

export default () => {
    return (
        <footer className={`footer ${style.footer}`}>
            <div className="container">
                <a href="https://github.com/latte-carousel/latte-carousel">
                    Made with <i className="fas fa-heart" /> in SP
                </a>
            </div>
        </footer>
    );
};
