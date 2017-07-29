/* @flow */

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import { media } from '../../utils';
import type { LocationType } from '../types';

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  padding-top: 1rem;
  ${media.tablet`
    padding-top: 1.5rem;
  `};
`;

const Name = styled.h1`
  color: ${props => props.theme.charcoalGrey};
  font-family: ${props => props.theme.philosopher};
  font-size: 1.625rem;
  line-height: 1.385;
  margin: 0;
  ${media.tablet`
    font-size: 2rem;
    line-height: 1.125;
  `};
`;

const Location = styled.small`
  color: ${props => props.theme.hueGrey};
  display: block;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.571;
  margin-top: 0.5rem;
`;

const Favorites = styled.button`
  display: none;
  background-color: transparent;
  border: 1px solid ${props => props.theme.anotherGrey};
  color: ${props => props.theme.ocean};
  cursor: pointer;
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 1;
  padding: 0.5rem 1rem;
  ${media.tablet`
    display: block;
  `};
`;

type Props = {
  name: string,
  location: LocationType,
};

export default ({ name, location }: Props) =>
  (<Grid fluid>
    <Wrapper>
      <div>
        <Name>
          {name}
        </Name>
        <Location>
          {location.subLocalityName && `${location.subLocalityName}, `}
          {location.street && `${location.street}, `}
          {location.house && `${location.house}`}
          {location.postalCode && ` • ${location.postalCode}`}
        </Location>
      </div>
      <Favorites>В избранное</Favorites>
    </Wrapper>
  </Grid>);
