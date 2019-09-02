import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PostsContainer = styled.div`
  width: 80%;
`

const ArticleList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const ArticleListItem = styled.li`
  margin-bottom: 2rem;
`

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
`

function PostList() {
  return (
    <PostsContainer>
      <ArticleList>
        <ArticleListItem>
          <ArticleLink to="/">Another post title</ArticleLink>
        </ArticleListItem>
        <ArticleListItem>
          <ArticleLink to="/">Another post title</ArticleLink>
        </ArticleListItem>
        <ArticleListItem>
          <ArticleLink to="/">Another post title</ArticleLink>
        </ArticleListItem>
        <ArticleListItem>
          <ArticleLink to="/">Another post title</ArticleLink>
        </ArticleListItem>
        <ArticleListItem>
          <ArticleLink to="/">Another post title</ArticleLink>
        </ArticleListItem>
        <ArticleListItem>
          <ArticleLink to="/">Another post title</ArticleLink>
        </ArticleListItem>
        <ArticleListItem>
          <ArticleLink to="/">Another post title</ArticleLink>
        </ArticleListItem>
        <ArticleListItem>
          <ArticleLink to="/">Another post title</ArticleLink>
        </ArticleListItem>
        <ArticleListItem>
          <ArticleLink to="/">Another post title</ArticleLink>
        </ArticleListItem>
        <ArticleListItem>
          <ArticleLink to="/">Another post title</ArticleLink>
        </ArticleListItem>
        <ArticleListItem>
          <ArticleLink to="/">Another post title</ArticleLink>
        </ArticleListItem>
      </ArticleList>
    </PostsContainer>
  )
}

export default PostList
