/* eslint-disable */
import React from "react";
import { StaticQuery, graphql } from "gatsby";
import style from "./guides.module.css";

export default class Guides extends React.Component {
    constructor(props) {
        super(props);

        this.state = { selected: "guide-es5" };
    }

    changeGuide(id) {
        this.setState({ selected: id });
    }

    renderGuides(data) {
        const current = data.allMarkdownRemark.edges.find((edge) => {
            return this.state.selected === edge.node.frontmatter.id;
        });

        const items = data.allMarkdownRemark.edges.map((edge) => {
            const id = edge.node.frontmatter.id;
            const title = edge.node.frontmatter.title;
            const className = edge === current ? `is-active ${style.isActive}` : "";

            return (
                <li className={className} key={id}>
                    <a onClick={() => this.changeGuide(id)}>{title}</a>
                </li>
            );
        });

        return (
            <section className={`section ${style.guides}`}>
                <div className="container">
                    <h3 id="get-started" className="title has-text-weight-light">
                        Get Started
                    </h3>

                    <div className={`tabs is-centered ${style.tabs}`}>
                        <ul>{items}</ul>
                    </div>

                    <div className={style.content} dangerouslySetInnerHTML={{ __html: current.node.html }} />
                </div>
            </section>
        );
    }

    render() {
        return (
            <StaticQuery
                query={graphql`
                    {
                        allMarkdownRemark(
                            filter: { frontmatter: { id: { glob: "guide-*" } } }
                            sort: { order: ASC, fields: [frontmatter___order] }
                        ) {
                            edges {
                                node {
                                    frontmatter {
                                        id
                                        title
                                    }
                                    html
                                }
                            }
                        }
                    }
                `}
                render={(data) => this.renderGuides(data)}
            />
        );
    }
}
