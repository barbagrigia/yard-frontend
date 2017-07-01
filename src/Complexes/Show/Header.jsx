/* @flow */

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import type { LocationType } from './../types';

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  padding-top: 1.5rem;
`;

const Name = styled.h1`
  fcolor: #3e4247;
  font-family: "Philosopher";
  font-size: 2rem;
  line-height: 1.125;
  margin: 0;
`;

const Location = styled.small`
  fcolor: #a9afb6;
  display: block;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.571;
  margin-top: 0.5rem;
`;

const Favorites = styled.button`
  background-color: transparent;
  border: 1px solid #e0e0e1;
  color: #00779a;
  cursor: pointer;
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 1.0;
  padding: 0.5rem 1rem;
`;

type Props = {
  name: string,
  location: LocationType,
};

function formatLocation(location): string {
  return `${location.subLocalityName ? `${location.subLocalityName}, ` : ''}
          ${location.street ? `${location.street}, ` : ''}
          ${location.house ? `${location.house}` : ''}
          ${location.postalCode ? ` • ${location.postalCode}` : ''}`;
}

export default ({ name, location }: Props) => (
  <Grid>
    <Wrapper>
      <div>
        <Name>{name}</Name>
        <Location>{formatLocation(location)}</Location>
      </div>
      <Favorites>В избранное</Favorites>
    </Wrapper>
  </Grid>
);
