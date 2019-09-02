import React from 'react';
import GlobalStyles from '../styled/GlobalStyles';
import Header from '../Header';

const PageLayout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    {children}
  </>
);

export default PageLayout;
