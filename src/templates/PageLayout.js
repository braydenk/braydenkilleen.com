import React from "react"
import Header from "../components/Header"
import styled from "styled-components"

const ContentContainer = styled.main`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function PageLayout({ children }) {
  return (
    <div>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </div>
  )
}

export default PageLayout
