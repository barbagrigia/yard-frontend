import React from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';
import Header from './Header';
import Carousel from './Carousel';
import Summary from './Summary';
import Offers from './Offers';
import Location from './Location';
import Directions from './Directions';

export default () => (
  <div>
    <Helmet>
      <title>Жилой комплекс «Полянка/44» | Compass Development</title>
    </Helmet>
    <BodyClassName className="complex">
      <main>
        <Header />
        <Carousel />
        <Summary />
        <Offers />
        <Location />
        <Directions />
      </main>
    </BodyClassName>
  </div>
);
