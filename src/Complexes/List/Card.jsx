/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { Children } from 'react';
import { getImageUrl } from './../../utils';
import type { LocationType } from './../types';

const Card = styled(Link)`
  background-color: #fff;
  border-bottom: solid 0.125rem #646971;
  display: flex;
  margin-bottom: 3rem;
  text-decoration: none;
  overflow: hidden;

  &:hover {
    transition: box-shadow .3s ease;
    will-change: box-shadow;
    box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.3);
  }

  &:last-child {
    margin-bottom: 6rem;
  }
`;

const Image = styled.div`
  background-clip: content-box;
  background-position: center center;
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  flex-basis: 41.66666667%;
  height: 21.875rem;
  padding-right: 0.5rem;
`;

const Description = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-basis: 58.33333333%;
  flex-flow: column;
  padding: 1.5rem 6.25rem 1.5rem 0.5rem;
`;

const Location = styled.p`
  color: #646971;
  font-family: "Monaco", "Consolas", "Lucida Console", monospace;
  line-height: 1.25;
  margin: 0;
  text-transform: uppercase;
`;

const Name = styled.h3`
  color: #000;
  font-size: 2.5rem;
  line-height: 1.4;
  margin: 1.5rem 0 0 0;
`;

const Info = styled.p`
  color: #3e4247;
  line-height: 1.5;
  margin: 0.5rem 0 0 0;
`;

type Props = {
  id: number,
  img: string,
  location: LocationType,
  name: string,
  children: Children,
};

export default ({ id, img, location, name, children }: Props) =>
  (<Card to={`/complexes/${id}`}>
    <Image
      style={{
        backgroundImage: `url(${getImageUrl(img)})`,
      }}
    />
    <Description>
      <Location>
        {location.subLocalityName && `${location.subLocalityName}, `}
        {location.street && `${location.street}, `}
        {location.house && `${location.house}`}
      </Location>
      <Name>
        {name}
      </Name>
      <Info>
        {children}
      </Info>
    </Description>
  </Card>);
