import styled from 'styled-components';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    margin-top: 0;
    box-sizing: inherit;
  }

  body {
    background-color: #fff;
    height: 100vh;
    margin: 0;
  }

  h1 {
    font-size: 2.25rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin: 0.5rem 0;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin: 0.5rem 0;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin: 0.5rem 0;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin: 0.5rem 0;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    letter-spacing: 0.01em;
    line-height: 1.6;
  }
`;

const Main = styled.main`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <Main>{children}</Main>
  </>
);

export default Layout;
