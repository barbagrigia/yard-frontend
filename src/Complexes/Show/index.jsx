/* @flow */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';
import { get } from './../../api';
import Header from './Header';
import Gallery from './Gallery';
import Summary from './Summary';
import Offers from './Offers';
import Location from './Location';
import Directions from './Directions';
import type { ComplexType } from './../types';

class Complex extends Component {
  state = {};
  state: ComplexType;

  componentDidMount() {
    this.load(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps: Object) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.load(nextProps.match.params.id);
    }
  }

  load(id: number) {
    get(`/complexes/${id}`).then(complex => this.setState(complex));
  }

  render() {
    const {
      name = '',
      location = {},
      images = [],
      units = 0,
      details = {},
      statistics = {},
      fullDescription = '',
      amenities = [],
    } = this.state;

    return (
      <div>
        <Helmet>
          <title>
            {`${name}`} | Compass Development
          </title>
        </Helmet>
        <BodyClassName className="complex">
          <main>
            <Header name={name} location={location} />
            <Gallery images={images} name={name} />
            <Summary
              units={units}
              details={details}
              statistics={statistics}
              fullDescription={fullDescription}
              amenities={amenities}
            />
            <Offers name={name} />
            <Location />
            <Directions location={location} />
          </main>
        </BodyClassName>
      </div>
    );
  }
}

export default Complex;
