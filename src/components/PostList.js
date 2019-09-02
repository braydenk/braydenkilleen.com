import React from 'react';
import styled from 'styled-components';
import Link from './styled/Link';
import List from './styled/List';

const ArticleListItem = styled.li`
  margin-bottom: 2rem;
`;

const ArticleLink = styled(Link)`
  display: inline-block;
  width: 100%;
  font-size: 1.75rem;
  letter-spacing: -0.01em;
  line-height: 1.2;
  margin: 0.5rem 0;
  padding-bottom: 0.5rem;
  color: #111;
  border-bottom: 1px solid #c4cdd5;
  text-decoration: none;

  :hover {
    color: #276ef1;
    text-decoration: none;
    border-bottom: 1px solid #276ef1;
  }
`;

function PostList({ posts }) {
  return (
    <div>
      <List>
        {posts.map(post => {
          return (
            <ArticleListItem key={post.id}>
              <ArticleLink to={post.slug}>{post.title}</ArticleLink>
            </ArticleListItem>
          );
        })}
      </List>
    </div>
  );
}

export default PostList;
