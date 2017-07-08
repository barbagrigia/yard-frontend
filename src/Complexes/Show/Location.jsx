/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link as RouterLink } from 'react-router-dom';

const Location = styled.div`background-color: #3e4247;`;

const Wrapper = styled.div`margin-right: 1rem;`;

const Subtitle = styled.p`
  color: #a9afb6;
  font-family: "Philosopher";
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.125;
  margin-bottom: 0;
  margin-top: 11.3125rem;
`;

const Title = styled.p`
  color: #fff;
  font-family: "Philosopher";
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 0;
  margin-top: 3rem;
`;

const Link = styled(RouterLink)`
  color: #00779a;
  line-height: 1.5625;
  margin-top: 3rem;
  text-decoration: none;
`;

const Image = styled.img`
  height: 560px;
  margin-bottom: 12.125rem;
  margin-top: 4rem;
  width: 100%;
`;

const PUBLIC_URL: string = process.env.PUBLIC_URL || '';

export default () =>
  (<Location>
    <Grid>
      <Row>
        <Col lg={6}>
          <Wrapper>
            <Subtitle>Якиманка</Subtitle>
            <Title>Исторический центр Москвы в двух километрах от Кремля</Title>
            <Link to="#">Гид по Якиманке →</Link>
          </Wrapper>
        </Col>
        <Col lg={6}>
          <Image src={`${PUBLIC_URL}/img/polyanka-photo.png`} alt="Полянка" />
        </Col>
      </Row>
    </Grid>
  </Location>);
