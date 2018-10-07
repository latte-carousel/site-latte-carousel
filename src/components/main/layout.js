import React from "react";
import SEO from "./seo";
import Navbar from "./navbar";
import Footer from "./footer";

export default ({ children, navbar }) => {
    return (
        <>
            <SEO />

            {navbar && <Navbar />}

            {children}

            <Footer />
        </>
    );
};
