import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
`;
