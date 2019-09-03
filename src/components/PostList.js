import React from 'react';
import styled from 'styled-components';
import Link from './styled/Link';
import List from './styled/List';

const PostListContainer = styled.div`
  width: 90%;
  @media (min-width: 700px) {
    width: 70%;
  }

  @media (min-width: 1000px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const ArticleListItem = styled.li`
  margin-bottom: 2rem;
`;

const ArticleLink = styled(Link)`
  display: inline-block;
  width: 100%;
  padding-bottom: 0.5rem;
  color: #111;
  border-bottom: 1px solid #c4cdd5;
  text-decoration: none;

  font-size: 24px;
  line-height: 38px;
  font-weight: 500;
  margin: 8px 0;

  :hover {
    color: #276ef1;
    text-decoration: none;
    border-bottom: 1px solid #276ef1;
  }
`;

function PostList({ posts }) {
  return (
    <PostListContainer>
      <List>
        {posts.map(post => {
          return (
            <ArticleListItem key={post.id}>
              <ArticleLink to={post.slug}>{post.title}</ArticleLink>
            </ArticleListItem>
          );
        })}
      </List>
    </PostListContainer>
  );
}

export default PostList;
