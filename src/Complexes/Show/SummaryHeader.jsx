/* @flow */

import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Pluralizer from '../../components/Pluralizer';
import { media } from '../../utils';
import type { DetailsType } from '../types';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 1rem;
  padding-bottom: 0.875em;
  ${media.tablet`
    flex-direction: row;
    padding-top: 1.5rem;
    padding-bottom: 1.5em;
  `};
`;

const Subtitle = styled.small`
  color: ${props => props.theme.hueGrey};
  display: block;
  font-family: ${props => props.theme.fira};
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.571;
  margin-top: 0.625rem;
`;

type Props = {
  units: number,
  details: DetailsType,
};

export default ({ units, details }: Props) =>
  (<Header>
    {units > 0 &&
      <Title>
        {units}
        <Subtitle>
          <Pluralizer numeral={units} one="предложение" few="предложения" other="предложений" />
        </Subtitle>
      </Title>}
    {details.architect &&
      <Title>
        {details.architect}
        <Subtitle>архитектор</Subtitle>
      </Title>}
    {details.developer &&
      <Title>
        {details.developer}
        <Subtitle>застройщик</Subtitle>
      </Title>}
  </Header>);
