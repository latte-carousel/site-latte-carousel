import React from "react";

import style from "./carousel.module.css";

export default class Carousel extends React.Component {
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

    render() {
        if (this.LatteCarousel == null || this.LatteItem == null) {
            return null;
        }

        return (
            <div className={style.container}>
                <this.LatteCarousel options={this.options}>
                    <this.LatteItem>
                        <div className={style.item}>1</div>
                    </this.LatteItem>

                    <this.LatteItem>
                        <div className={style.item}>2</div>
                    </this.LatteItem>

                    <this.LatteItem>
                        <div className={style.item}>3</div>
                    </this.LatteItem>

                    <this.LatteItem>
                        <div className={style.item}>4</div>
                    </this.LatteItem>

                    <this.LatteItem>
                        <div className={style.item}>5</div>
                    </this.LatteItem>

                    <this.LatteItem>
                        <div className={style.item}>6</div>
                    </this.LatteItem>
                </this.LatteCarousel>
            </div>
        );
    }
}
