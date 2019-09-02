import React from "react"
import PageLayout from "../templates/PageLayout"
import { graphql } from "gatsby"
import PostList from "../components/PostList"

export default ({ data }) => {
  const posts = data.allMarkdownRemark.nodes.map(node => ({
    id: node.id,
    title: node.frontmatter.title,
    slug: node.fields.slug,
  }))
  return (
    <PageLayout>
      <PostList posts={posts} />
    </PageLayout>
  )
}
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
`
