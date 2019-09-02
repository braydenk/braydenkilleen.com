import React from 'react';
import GlobalStyles from '../styled/GlobalStyles';
import Header from '../Header';
import styled from 'styled-components';

const Main = styled.main`
  padding: 6rem 2rem 0 2rem;
  height: 100vh;
`;

const PageLayout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <Main>{children}</Main>
  </>
);

export default PageLayout;
