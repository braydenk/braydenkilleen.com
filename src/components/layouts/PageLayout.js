import React from 'react';
import { GlobalStyles, theme } from '../styled/Theme';
import Header from '../Header';
import styled, { ThemeProvider } from 'styled-components';

const PageWrapper = styled.div``;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const PageLayout = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header />
        <Main>{children}</Main>
      </PageWrapper>
    </ThemeProvider>
  </>
);

export default PageLayout;
