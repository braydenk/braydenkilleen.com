import React from 'react';
import { graphql } from 'gatsby';
// import Layout from '../components/Layout';

export default ({ data }) => {
  return (
    <h1>d</h1>
    // <Layout>
    //   <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    // </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
