import React from "react";
import Helmet from "react-helmet";

export const lang = "en";
export const locale = "en_US";
export const charset = "utf-8";
export const title = "LatteCarousel";
export const description = "LatteCarousel is a lightweight and responsive carousel without any dependencies.";
export const keywords = ["Carousel", "Responsive", "JavaScript", "Web", "HTML", "CSS"];
export const theme = "#f5e0d1";
export const url = "https://lattecarousel.dev";
export const image = "https://lattecarousel.dev/img/inverted_small.png";

export default () => {
    return (
        <Helmet>
            {/* Site tags */}
            <html lang={lang} />
            <title>{title}</title>

            <meta charset={charset} />
            <meta name="robots" content="nofollow" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* General tags */}
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="theme-color" content={theme} />
            <meta name="keywords" content={keywords.join(",")} />

            {/* OpenGraph tags */}
            <meta property="og:locale" content={locale} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="120" />
            <meta property="og:image:height" content="110" />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};
