/* @flow */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { get } from '../../api';
import Header from './Header';
import Gallery from './Gallery';
import Summary from './Summary';
import Offers from './Offers';
import Location from './Location';
import Directions from './Directions';
import type { ComplexType } from '../types';

export default class Complex extends Component {
  state = {};

  componentDidMount() {
    this.load(this.props.match.params.slug);
  }

  componentWillReceiveProps(nextProps: Object) {
    if (nextProps.match.params.slug !== this.props.match.params.slug) {
      this.load(nextProps.match.params.slug);
    }
  }

  load(slug: number) {
    get(`/complexes/${slug}`).then((complex: ComplexType) => this.setState(complex));
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
      <main>
        <Helmet
          style={[
            {
              cssText: `
                body {
                  background: #fff;
                }
              `,
            },
          ]}
          title={`${name} | Compass Development`}
        />
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
    );
  }
}
