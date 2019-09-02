import React from 'react';
import { graphql } from 'gatsby';
import PostLayout from '../components/layouts/PostLayout';
import PageLayout from '../components/layouts/PageLayout';

export default ({ data }) => {
  return (
    <PageLayout>
      <PostLayout
        title={data.markdownRemark.frontmatter.title}
        content={data.markdownRemark.html}
      />
    </PageLayout>
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
