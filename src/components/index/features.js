import React from "react";

import style from "./features.module.css";

export default () => {
    return (
        <section className={`section ${style.features}`}>
            <div className="container has-text-centered">
                <div className="columns is-multiline">
                    <div className="column is-half">
                        <i className={`fas fa-mobile ${style.mobile}`} />
                        <p className="title is-size-5 has-text-weight-normal">Responsive Options</p>
                        <p className="subtitle is-size-6 has-text-weight-light">
                            Customize options for each breakpoint
                        </p>
                    </div>

                    <div className="column is-half">
                        <i className={`fas fa-hand-point-up ${style.touch}`} />
                        <p className="title is-size-5 has-text-weight-normal">Touch Support</p>
                        <p className="subtitle is-size-6 has-text-weight-light">
                            Compatible with desktop and mobile devices
                        </p>
                    </div>

                    <div className="column is-half">
                        <i className={`fab fa-js-square ${style.javascript}`} />
                        <p className="title is-size-5 has-text-weight-normal">JavaScript Only</p>
                        <p className="subtitle is-size-6 has-text-weight-light">No additional dependencies needed</p>
                    </div>

                    <div className="column is-half">
                        <i className={`fab fa-chrome ${style.browser}`} />
                        <p className="title is-size-5 has-text-weight-normal">Browser Support</p>
                        <p className="subtitle is-size-6 has-text-weight-light">Works on any ES5 and CSS3 browser</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
