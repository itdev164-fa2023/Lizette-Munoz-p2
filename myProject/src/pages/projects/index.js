import { graphql, Link } from "gatsby";
import React from "react";
import { siteMetadata } from "../../../gatsby-config";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
export default function Projects({ data }) {
  console.log(data);
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites</h3>
        <h3> ____________________</h3>

        <div className="=styles.projects">
          {projects.map((project) => (
            <Link key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <h3>____________________</h3>
        <p>Email me at {contact} </p>
        <h3>____________________</h3>
      </div>
    </Layout>
  );
}

//export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
