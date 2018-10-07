import React from "react";
import Layout from "../components/main/layout";
import Hero from "../components/index/hero";
import Features from "../components/index/features";
import Demo from "../components/index/demo";
import Guides from "../components/index/guides";

export default () => {
    return (
        <Layout navbar={false}>
            <Hero />

            <Demo />

            <Features />

            <Guides />
        </Layout>
    );
};
