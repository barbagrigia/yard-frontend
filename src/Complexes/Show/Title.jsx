/* @flow */

import styled from 'styled-components';

import { media } from '../../utils';

export default styled.h2`
  color: ${props => props.theme.charcoalGrey};
  font-family: ${props => props.theme.philosopher};
  font-size: 1.25rem;
  line-height: 1.125;
  margin: 0;
  ${media.tablet`
    font-size: 1.5rem;
  `};

  &:not(:first-child) {
    ${media.tablet`
      margin-left: 3rem;
    `};
  }
`;
