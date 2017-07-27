/* @flow */

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

import developmentImg from '../../img/compass-development-logo.svg';
import { media } from '../../utils';

const Wrapper = styled.div`
  background-color: ${props => props.theme.black};
  display: none;
  overflow: hidden;
  padding-bottom: 5rem;
  padding-top: 5rem;
  text-align: center;
  ${media.tablet`
    display: block;
  `};
`;

export default () =>
  (<Wrapper>
    <MediaQuery maxWidth={1199}>
      <Grid fluid>
        <img src={developmentImg} alt="Compass Development Logo" />
      </Grid>
    </MediaQuery>
    <MediaQuery minWidth={1200}>
      <Grid>
        <img src={developmentImg} alt="Compass Development Logo" />
      </Grid>
    </MediaQuery>
  </Wrapper>);
