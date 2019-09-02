import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

const Link = ({ to, children, ...props }) => (
  <GatsbyLink to={to} {...props}>
    {children}
  </GatsbyLink>
);

export default styled(Link)`
  text-decoration: none;
  color: #276ef1;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;
