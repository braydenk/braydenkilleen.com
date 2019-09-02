import React from 'react';
import styled from 'styled-components';
import logo from '../../static/logo.svg';
import Link from './styled/Link';

const PageHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f4f6f8;
  padding: 1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.img`
  height: 2rem;
  width: 2rem;
`;

const HeaderNav = styled.nav``;
const HeaderNavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;
const HeaderNavListItem = styled.li`
  margin-right: 2rem;
`;

const HeaderNavListLink = styled(Link)`
  color: #111;
  font-weight: 500;

  &:hover {
    color: #276ef1;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <PageHeader>
      <HeaderContainer>
        <Link to="/">
          <HeaderLogo src={logo} />
        </Link>
        <HeaderNav>
          <HeaderNavList>
            <HeaderNavListItem>
              <HeaderNavListLink to="/">Articles</HeaderNavListLink>
            </HeaderNavListItem>
            <HeaderNavListItem>
              <HeaderNavListLink to="/projects">Projects</HeaderNavListLink>
            </HeaderNavListItem>
            <HeaderNavListItem>
              <HeaderNavListLink to="/about">About</HeaderNavListLink>
            </HeaderNavListItem>
          </HeaderNavList>
        </HeaderNav>
      </HeaderContainer>
    </PageHeader>
  );
};

export default Header;
