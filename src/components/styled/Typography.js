import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 29px;
  line-height: 32px;
  font-weight: 500;
  margin: 40px 0;
`;

const H2 = styled.h2`
  font-size: 24px;
  line-height: 38px;
  font-weight: 500;
  margin: 40px 0;
`;

const H3 = styled.h3`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  margin: 28px 0;
`;

const H4 = styled.h4`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  margin: 24px 0;
`;

export const Title = ({ level, children }) => {
  switch (level) {
    case 1:
      return <H1>{children}</H1>;
    case 2:
      return <H2>{children}</H2>;
    case 3:
      return <H3>{children}</H3>;
    case 4:
      return <H4>{children}</H4>;
    default:
      return <H1>{children}</H1>;
  }
};

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin: 20px 0;
`;
