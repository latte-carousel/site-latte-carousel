module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "LatteCarousel",
                short_name: "Latte",
                start_url: "/",
                background_color: "#f5e0d1",
                theme_color: "#f5e0d1",
                display: "minimal-ui",
                icon: "src/images/inverted_small.png",
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
    ],
};
