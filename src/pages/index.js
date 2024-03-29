import React from 'react';
import { graphql } from 'gatsby';
import PageLayout from '../components/layouts/PageLayout';
import PostList from '../components/PostList';

export default ({ data }) => {
  const posts = data.allMarkdownRemark.nodes.map(node => ({
    id: node.id,
    title: node.frontmatter.title,
    slug: node.fields.slug,
  }));

  return (
    <PageLayout>
      <PostList posts={posts} />
    </PageLayout>
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
