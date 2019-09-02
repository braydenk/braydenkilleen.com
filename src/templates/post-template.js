import React from "react"
import PageLayout from "./PageLayout"
import { graphql } from "gatsby"
import Post from "../components/Post"

export default ({ data }) => {
  return (
    <PageLayout>
      <Post html={data.markdownRemark.html} />
    </PageLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
