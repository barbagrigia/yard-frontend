/* eslint react/style-prop-object: 0 */

/* @flow */

import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import type { LocationType } from './../types';

const MapBox = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoianVzdHVzZWJyYWluIiwiYSI6ImNpbHV1dWlmYTAwNmp2Zm02NjZkZmIybGkifQ.feSAgXjbU00mlAjBQyv1lQ',
});

type Props = {
  location: LocationType,
};

export default ({ location }: Props) => {
  const { latitude = 0, longitude = 0 } = location;

  return (
    <MapBox
      style="mapbox://styles/mapbox/light-v9"
      zoom={[16]}
      center={[longitude, latitude]}
      containerStyle={{
        boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.5)',
        height: '306px',
        marginBottom: '4rem',
        marginTop: '-130px',
        width: '100%',
      }}
    >
      <Layer
        type="symbol"
        id="marker"
        layout={{
          'icon-image': 'marker-15',
        }}
      >
        <Feature coordinates={[longitude, latitude]} />
      </Layer>
    </MapBox>
  );
};
