import React from "react";

import style from "./demo.module.css";

export default class Demo extends React.Component {
    constructor(props) {
        super(props);

        if (typeof window === "undefined") {
            return;
        }

        this.LatteCarousel = require("react-latte-carousel").LatteCarousel;
        this.LatteItem = require("react-latte-carousel").LatteItem;

        this.options = {
            count: 3,
            touch: true,
            buttons: true,
            dots: true,
            rewind: true,
            autoplay: 0,
            responsive: {
                "0": { count: 1.5, touch: true, buttons: false },
                "480": { count: 2.5, touch: true, buttons: false },
                "768": { count: 3, touch: true, dots: false },
                "1440": { count: 4, touch: true, dots: false },
            },
        };
    }

    renderCarousel() {
        if (this.LatteCarousel == null || this.LatteItem == null) {
            return;
        }

        return (
            <this.LatteCarousel options={this.options}>
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <this.LatteItem key={index}>
                        <div className={style.item}>{index}</div>
                    </this.LatteItem>
                ))}
            </this.LatteCarousel>
        );
    }

    render() {
        return (
            <section className={`section ${style.demo}`}>
                <div className={`container ${style.container}`}>{this.renderCarousel()}</div>
            </section>
        );
    }
}
