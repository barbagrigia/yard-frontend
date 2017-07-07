/* @flow */

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Header from './SummaryHeader';
import Hr from './Hr';
import Features from './Features';
import Description from './Description';
import Infrastructure from './Infrastructure';
import type { DetailsType, StatisticsType, AmenitiesType } from './../types';

type Props = {
  units: number,
  details: DetailsType,
  statistics: StatisticsType,
  fullDescription: string,
  amenities: AmenitiesType,
};

export default ({ units, details, statistics, fullDescription, amenities }: Props) =>
  (<Grid>
    <Header units={units} details={details} />
    <Hr />
    <Features statistics={statistics} details={details} />
    {fullDescription && <Description fullDescription={fullDescription} />}
    <Hr />
    {amenities.length > 0 && <Infrastructure amenities={amenities} />}
  </Grid>);
