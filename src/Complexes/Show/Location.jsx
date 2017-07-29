/* @flow */

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { media } from '../../utils';

const Location = styled.div`
  background-color: ${props => props.theme.charcoalGrey};
  padding-bottom: 3rem;
  ${media.tablet`
    padding-top: 4rem;
    padding-bottom: 13.125rem;
  `};
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`
    flex-direction: row-reverse;
    align-items: center;
  `};
`;

const Col = styled.div`
  flex-basis: 100%;
  ${media.tablet`
    flex: 1 1 calc(50% - 0.5rem);
    &:last-child {
      margin-right: 1rem;
    }
  `};
`;

const Wrapper = styled.div`
  margin-right: -1rem;
  margin-left: -1rem;
  ${media.tablet`
    margin: 0;
  `};
`;

const Image = styled.img`width: 100%;`;

const Subtitle = styled.p`
  color: ${props => props.theme.hueGrey};
  font-family: ${props => props.theme.philosopher};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.1;
  margin-top: 3rem;
  margin-bottom: 0;
  ${media.tablet`
    font-size: 1.5rem;
    line-height: 1.125;
    margin-top: 0;
  `};
`;

const Title = styled.p`
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.philosopher};
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.375;
  margin-top: 2rem;
  margin-bottom: 2rem;
  ${media.desktop`
    font-size: 3rem;
    line-height: 1.25;
    margin-top: 3rem;
    margin-bottom: 3rem;
  `};
`;

const Link = styled(RouterLink)`
  display: inline-block;
  color: ${props => props.theme.ocean};
  line-height: 1.5625;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const PUBLIC_URL: string = process.env.PUBLIC_URL || '';

export default () =>
  (<Location>
    <Grid fluid>
      <Row>
        <Col>
          <Wrapper>
            <Image
              src={`${PUBLIC_URL}/img/polyanka-photo.png`}
              srcSet={`${`${PUBLIC_URL}/img/polyanka-photo@2x.png`} 2x`}
              alt="Полянка"
              title="Полянка"
            />
          </Wrapper>
        </Col>
        <Col>
          <Subtitle>Якиманка</Subtitle>
          <Title>Исторический центр Москвы в двух километрах от Кремля</Title>
          <Link to="#">Гид по Якиманке →</Link>
        </Col>
      </Row>
    </Grid>
  </Location>);
