/* @flow */

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import Hr from './Hr';
import MapBox from './MapBox';
import { media } from '../../utils';
import type { LocationType } from '../types';

const Directions = styled.section`
  background-color: ${props => props.theme.white};
  ${media.tablet`
    padding-bottom: 4rem;
  `};
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`
    flex-direction: row;
  `};
`;

const Wrapper = styled.div`
  will-change: auto;
  ${media.tablet`
    flex: 1 1 calc(50% - 0.5rem);
    background-color: ${props => props.theme.white};
    will-change: box-shadow;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
    margin-top: -9.5625rem;
  `};
`;

const StyledMapBox = styled(MapBox)`
  height: 52vw;
  will-change: box-shadow;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
  margin-right: -1rem;
  margin-left: -1rem;
  ${media.tablet`
    flex: 1 1 calc(50% - 0.5rem);
    height: 19.125rem;
    margin-top: -9.5625rem;
    margin-right: 1rem;
    margin-left: 0;
    will-change: auto;
  `};
`;

const Direction = styled.div`
  padding: 1.5rem 0 1.5625rem;
  ${media.tablet`
    padding: 1.5rem 1.5rem 1.5625rem;
  `};
`;

const Title = styled.p`
  color: ${props => props.theme.charcoalGrey};
  font-weight: 500;
  line-height: 1.375;
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

const Distance = styled.p`
  color: ${props => props.theme.hueGrey};
  line-height: 1.375;
  margin: 0;
`;

const Line = Hr.extend`
  margin-right: -1rem;
  margin-left: -1rem;
  ${media.tablet`
    margin: 0;
  `};
`;

type Props = {
  location: LocationType,
};

export default ({ location }: Props) =>
  (<Directions>
    <Grid fluid>
      <Row>
        <StyledMapBox location={location} />
        <Wrapper>
          <Direction>
            <Title>Красный Октябрь</Title>
            <Distance>24 минуты, 6 км</Distance>
          </Direction>
          <Line />
          <Direction>
            <Title>World class</Title>
            <Distance>2 минуты, 300 м</Distance>
          </Direction>
          <Line />
          <Direction>
            <Title>Третьяковская галерея</Title>
            <Distance>14 минут, 4 км</Distance>
          </Direction>
          <Line />
        </Wrapper>
      </Row>
    </Grid>
  </Directions>);
