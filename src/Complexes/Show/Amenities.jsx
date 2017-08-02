/* @flow */

import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import { media } from '../../utils';
import type { AmenitiesType } from '../types';

const Amenities = styled.section`
  padding-top: 2rem;
  padding-bottom: 3rem;
  ${media.tablet`
    padding-bottom: 4rem;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  ${media.desktop`
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  `};
`;

const Amenity = styled.p`
  box-sizing: border-box;
  color: ${props => props.theme.charcoalGrey};
  line-height: 1.375;
  margin-top: 0.5rem;
  margin-bottom: 0;
  padding-right: 1.5rem;
  ${media.tablet`
    flex: 0 0 25%;
  `};
  ${media.desktop`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    flex: 0 0 16.66666667%;
  `};
`;

type Props = {
  amenities: AmenitiesType,
};

export default ({ amenities }: Props) =>
  (<Amenities>
    <Title>Инфраструктура</Title>
    <Wrapper>
      {amenities.map(amenity =>
        (<Amenity>
          {amenity}
        </Amenity>),
      )}
    </Wrapper>
  </Amenities>);
