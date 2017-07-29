/* eslint react/style-prop-object: 0 */

/* @flow */

import React from 'react';
import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl';

import type { LocationType } from '../types';

const MapBox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
  scrollZoom: false,
});

type Props = {
  location: LocationType,
};

export default (props: Props) => {
  const { location: { latitude = 55.75222, longitude = 37.61556 } } = props;

  return (
    <MapBox
      style={'mapbox://styles/mapbox/light-v9'}
      zoom={[11]}
      center={[longitude, latitude]}
      {...props}
    >
      <Layer
        type={'symbol'}
        id={'marker'}
        layout={{
          'icon-image': 'marker-15',
        }}
      >
        <Feature coordinates={[longitude, latitude]} />
      </Layer>
      <ZoomControl />
    </MapBox>
  );
};
