import React from "react"
import styled from "styled-components"

const PostContainer = styled.div`
  max-width: 70%;
`

function Post({ html }) {
  return (
    <PostContainer>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </PostContainer>
  )
}

export default Post
