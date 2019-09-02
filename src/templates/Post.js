import React from "react"
import PageLayout from "./PageLayout"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <PageLayout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
