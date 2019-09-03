import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../static/images/logo.svg';
import menuIcon from '../../static/images/menu.svg';
import closeIcon from '../../static/images/close.svg';
import Link from './styled/Link';
import List from './styled/List';

const PageHeader = styled.header`
  background: #fff;
  border-bottom: 1px solid #f4f6f8;
  padding: 1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
`;

const HeaderNav = styled.nav``;

const HeaderNavSmall = styled(HeaderNav)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding: 1rem;
`;

const HeaderNavList = styled(List)`
  display: flex;
`;

const HeaderNavListSmall = styled(HeaderNavList)`
  flex-direction: column;
  height: 100%;
  padding: 3rem;
`;

const HeaderNavListItem = styled.li`
  margin-left: 2rem;
`;

const HeaderNavListItemSmall = styled(HeaderNavListItem)`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  margin: 2rem;

  &:hover {
    color: #276ef1;
    text-decoration: none;
  }
`;

const HeaderNavListLink = styled(Link)`
  color: #111;
  font-weight: 500;
  display: inline-block;
  width: 100%;

  &:hover {
    color: #276ef1;
    text-decoration: none;
  }
`;

const MenuIconButton = styled.button`
  background: #fff;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

const Icon = styled.img`
  height: 2rem;
  width: 2rem;
`;

const CloseIconButton = styled.button`
  float: right;
  background: #fff;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
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
        <Icon src={menuIcon} />
      </MenuIconButton>
    );
  };

  const displayMobileNav = () => {
    return (
      <HeaderNavSmall>
        <CloseIconButton onClick={toggleNav}>
          <Icon src={closeIcon} />
        </CloseIconButton>
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
          <Icon src={logo} />
        </Link>
        {isScreenSmall ? displayMenuButton() : displayNav()}
        {isNavVisible && displayMobileNav()}
      </HeaderContainer>
    </PageHeader>
  );
}

export default Header;
