/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Title from './Title';
import type { AmenitiesType } from './../types';

const Infrastructure = styled.section`
  padding-bottom: 4rem;
  padding-top: 2rem;
`;

const Text = styled.p`
  color: #3e4247;
  line-height: 1.375;
  margin: 0;

  &:first-child {
    margin-top: 1rem;
  }

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

type Props = {
  amenities: AmenitiesType,
};

export default ({ amenities }: Props) =>
  (<Infrastructure>
    <Title>Инфраструктура</Title>
    <Row>
      {amenities.map(amenity =>
        (<Col lg={2}>
          <Text>
            {amenity}
          </Text>
        </Col>),
      )}
    </Row>
  </Infrastructure>);
