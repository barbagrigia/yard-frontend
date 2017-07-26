/* @flow */

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import { media } from '../../utils';

const Intro = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  ${media.tablet`
    margin-top: 4rem;
    margin-bottom: 4rem;
  `};
`;

const Title = styled.h2`
  color: ${props => props.theme.charcoalGrey};
  font-size: 1.25rem;
  line-height: 1.55;
  margin: 0;
  ${media.tablet`
    font-size: 1.5rem;
    line-height: 1.5;
  `};
`;

const Info = styled.p`
  color: ${props => props.theme.charcoalGrey};
  line-height: 1.5;
  margin-top: 1rem;
  ${media.tablet`
    margin-top: 0.5rem;
  `};
`;

const Contact = styled.button`
  background-color: ${props => props.theme.blackTwo};
  border-radius: 0.125rem;
  border: none;
  color: ${props => props.theme.white};
  cursor: pointer;
  font-family: ${props => props.theme.fira};
  line-height: 1;
  padding: 0.75rem 2rem;
  outline: none;

  &:hover {
    opacity: 0.8;
  }
`;

export default () =>
  (<Intro>
    <Grid fluid>
      <Row>
        <Col xs={12} smOffset={1} sm={10} mdOffset={2} md={8}>
          <Title>Discover Our New Developments</Title>
          <Info>
            Compass brings a modern approach to new development marketing and sales. From boutique
            rental conversions to luxurious ground-up condominiums, browse our portfolio of current
            offerings.
          </Info>
          <Contact type="submit">Contact The Team</Contact>
        </Col>
      </Row>
    </Grid>
  </Intro>);
