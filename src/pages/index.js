// @title: <<gatsby-003-graphql-playground>> program written in Gatsby-JS.
// @desc: A simple way using the graphql playground
// @author: Mustapha Benmbarek.
// @Copyright © 2019 All rights reserved.
// @version: 1.0

import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>{data.site.siteMetadata.author}</h2>
      <p>{data.site.siteMetadata.description}</p>
    </div>
  );
};

export default IndexPage;
