import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Intro = styled.section`
  margin-bottom: 4rem;
  margin-top: 4rem;
  text-align: center;
`;

const Title = styled.h2`
  color: #3e4247;
  line-height: 1.5;
  margin: 0 0;
`;

const Info = styled.p`
  color: #3e4247;
  line-height: 1.5;
  margin-top: 0.5rem;
`;

const Contact = styled.button`
  background-color: #000;
  border-radius: 0.125rem;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: "Fira Sans", "Helvetica", sans-serif;
  line-height: 1.0;
  padding: 0.75rem 2rem;
  outline: none;

  &:hover {
    background-color: #404040;
  }
`;

export default () => (
  <Intro>
    <Grid>
      <Row>
        <Col lgOffset={2} lg={8}>
          <Title>Discover Our New Developments</Title>
          <Info>
            Compass brings a modern approach to new development marketing and
            sales. From boutique rental conversions to luxurious ground-up
            condominiums, browse our portfolio of current offerings.
          </Info>
          <Contact type="submit">Contact The Team</Contact>
        </Col>
      </Row>
    </Grid>
  </Intro>
);
