/* @flow */

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './img/compass-logo.svg';

const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #eaebf0;
`;

const LogoLink = styled(Link)`
  display: inline-block;
  height: 1.5rem;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
`;

const Nav = styled.nav`text-align: right;`;

const NavLink = styled(Link)`
  color: #3e4247;
  line-height: 1.0;
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
    <Grid>
      <Row between="lg" middle="lg">
        <Col lg={2}>
          <LogoLink to="/">
            <img src={logo} alt="Compass Logo" />
          </LogoLink>
        </Col>
        <Col lg={10}>
          <Nav>
            <NavLink to="#">Buy</NavLink>
            <NavLink to="#">Rent</NavLink>
            <NavLink to="#">Our Agents</NavLink>
          </Nav>
        </Col>
      </Row>
    </Grid>
  </Header>);
