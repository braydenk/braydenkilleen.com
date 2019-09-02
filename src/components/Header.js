import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../static/logo.svg';
import menuIcon from '../../static/menu.svg';
import Link from './styled/Link';
import List from './styled/List';

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

const HeaderNavSmall = styled(HeaderNav)`
  position: absolute;
  left: 0;
  top: 4.5rem;
  width: 100vw;
  height: 25vh;
  background-color: #fff;
`;

const HeaderNavList = styled(List)`
  display: flex;
`;

const HeaderNavListSmall = styled(HeaderNavList)`
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const HeaderNavListItem = styled.li`
  margin-right: 2rem;
`;

const HeaderNavListItemSmall = styled(HeaderNavListItem)`
  margin: 0.5rem 0;
  text-align: center;
`;

const HeaderNavListLink = styled(Link)`
  color: #111;
  font-weight: 500;

  &:hover {
    color: #276ef1;
    text-decoration: none;
  }
`;

const MenuIconButton = styled.button`
  background: #fff;
  border: none;
  cursor: pointer;
`;

const MenuIcon = styled.img`
  height: 2rem;
  width: 2rem;
`;

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  });

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsScreenSmall(true);
    } else {
      setIsScreenSmall(false);
    }
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const displayNav = () => {
    return (
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
    );
  };

  const displayMenuButton = () => {
    return (
      <MenuIconButton onClick={toggleNav}>
        <MenuIcon src={menuIcon} />
      </MenuIconButton>
    );
  };

  const displayMobileNav = () => {
    return (
      <HeaderNavSmall>
        <HeaderNavListSmall>
          <HeaderNavListItemSmall>
            <HeaderNavListLink to="/">Articles</HeaderNavListLink>
          </HeaderNavListItemSmall>
          <HeaderNavListItemSmall>
            <HeaderNavListLink to="/projects">Projects</HeaderNavListLink>
          </HeaderNavListItemSmall>
          <HeaderNavListItemSmall>
            <HeaderNavListLink to="/about">About</HeaderNavListLink>
          </HeaderNavListItemSmall>
        </HeaderNavListSmall>
      </HeaderNavSmall>
    );
  };

  return (
    <PageHeader>
      <HeaderContainer>
        <Link to="/">
          <HeaderLogo src={logo} />
        </Link>
        {isScreenSmall ? displayMenuButton() : displayNav()}
        {isNavVisible && displayMobileNav()}
      </HeaderContainer>
    </PageHeader>
  );
}

export default Header;
