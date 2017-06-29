import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Header from './SummaryHeader';
import Hr from './Hr';
import Features from './Features';
import Description from './Description';
import Infrastructure from './Infrastructure';

export default props => (
  <Grid>
    <Header />
    <Hr />
    <Features statistics={props.statistics} />
    <Description />
    <Hr />
    <Infrastructure />
  </Grid>
);
