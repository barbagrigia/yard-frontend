/* @flow */

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Header from './SummaryHeader';
import Hr from './Hr';
import Features from './Features';
import Description from './Description';
import Infrastructure from './Infrastructure';
import type { StatisticsType } from './../types';

type Props = {
  statistics: StatisticsType,
};

export default ({ statistics }: Props) => (
  <Grid>
    <Header />
    <Hr />
    <Features statistics={statistics} />
    <Description />
    <Hr />
    <Infrastructure />
  </Grid>
);
