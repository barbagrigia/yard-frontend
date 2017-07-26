/* @flow */

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from './img/compass-logo.svg';
import { media } from './utils';

const Header = styled.header`
  background-color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.paleGrey};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(Link)`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1.125rem;
  ${media.tablet`
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  `};
`;

const Logo = styled.img`
  height: 1rem;
  ${media.tablet`
    height: 1.5rem;
  `};
`;

const Nav = styled.nav`
  display: none;
  text-align: right;
  ${media.tablet`
    display: flex;
  `};
`;

const NavLink = styled(Link)`
  color: #3e4247;
  line-height: 1;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export default () =>
  (<Header>
    <Grid fluid>
      <Wrapper>
        <LogoLink to="/">
          <Logo src={logo} alt="Compass Logo" />
        </LogoLink>
        <Nav>
          <NavLink to="#">Купить</NavLink>
          <NavLink to="#">Снять</NavLink>
          <NavLink to="#">Наши агенты</NavLink>
        </Nav>
      </Wrapper>
    </Grid>
  </Header>);
