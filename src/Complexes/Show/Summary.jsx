import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Header from './SummaryHeader';
import Hr from './Hr';
import Features from './Features';
import Description from './Description';
import Infrastructure from './Infrastructure';

export default () => (
  <Grid>
    <Header />
    <Hr />
    <Features />
    <Description />
    <Hr />
    <Infrastructure />
  </Grid>
);
