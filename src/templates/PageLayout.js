import React from "react"
import Header from "../components/Header"
import PostList from "../components/PostList"
import styled from "styled-components"

const ContentContainer = styled.main`
  margin-top: 8rem;
  display: flex;
  justify-content: center;
`

function PageLayout({ children }) {
  return (
    <div>
      <Header />
      <ContentContainer>
        <PostList />
      </ContentContainer>
      {children}
    </div>
  )
}

export default PageLayout
