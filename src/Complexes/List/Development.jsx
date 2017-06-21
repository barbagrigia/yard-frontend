import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import developmentImg from '../../img/compass-development-logo.svg';

const Wrapper = styled.div`
  background-color: #161616;
  overflow: hidden;
  padding-bottom: 5rem;
  padding-top: 5rem;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row center="lg">
        <img src={developmentImg} alt="Compass Development Logo" />
      </Row>
    </Grid>
  </Wrapper>
);
