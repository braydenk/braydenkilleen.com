import React from 'react';
import { GlobalStyles, theme } from '../styled/Theme';
import Header from '../Header';
import styled, { ThemeProvider } from 'styled-components';

const PageWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'header header header'
    '. main .';
  grid-gap: 16px;
`;

const Main = styled.main`
  grid-area: main;
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
