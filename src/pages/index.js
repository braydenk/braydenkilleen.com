import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

export default ({ data }) => {
  const posts = data.allMarkdownRemark.nodes.map(node => ({
    id: node.id,
    title: node.frontmatter.title,
    slug: node.fields.slug,
  }));

  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
};
export const indexPageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`;
