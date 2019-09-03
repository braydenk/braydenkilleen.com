import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  margin: 0 auto;
  width: 90%;

  @media (min-width: 600px) {
    width: 70%;
  }
`;

const PostTitle = styled.h1`
  font-size: 29px;
  line-height: 32px;
  font-weight: 500;
  margin: 20px 0;
`;

const PostContent = styled.div`
  h2 {
    font-size: 24px;
    line-height: 38px;
    font-weight: 500;
    margin: 30px 0;
  }

  h3 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    margin: 28px 0;
  }

  h4 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    margin: 24px 0;
  }

  a {
    text-decoration: none;
    color: #276ef1;
    font-weight: 400;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PostLayout = ({ title, content }) => {
  return (
    <PostContainer>
      <PostTitle>{title}</PostTitle>
      <PostContent dangerouslySetInnerHTML={{ __html: content }} />
    </PostContainer>
  );
};

export default PostLayout;
