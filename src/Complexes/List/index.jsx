/* @flow */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from 'react-flexbox-grid';

import background from '../../img/background.png';
import { get } from '../../api';
import Hero from './Hero';
import Intro from './Intro';
import Card from './Card';
import type { ComplexType } from '../types';

type State = { complexes: Array<ComplexType> };

export default class Complexes extends Component<void, void, State> {
  state = {
    complexes: [],
  };

  componentDidMount() {
    get(
      '/complexes?filter[state]=public',
    ).then(({ items: complexes }: { items: Array<ComplexType> }) => this.setState({ complexes }));
  }

  render() {
    const { complexes = [] } = this.state;

    return (
      <main>
        <Helmet
          style={[
            {
              cssText: `
                body {
                  background: url(${background});
                  background-size: 2%; background-color: #eaebf0;
                  background-repeat: repeat;
                }
              `,
            },
          ]}
          title="Complexes | Compass Development"
        />
        <Hero />
        <Intro />
        <Grid fluid>
          {complexes.map(complex =>
            (<Card
              key={complex.id}
              slug={complex.slug}
              location={complex.location}
              name={complex.name}
              img={complex.images[0].id}
            >
              {complex.shortDescription}
            </Card>),
          )}
        </Grid>
      </main>
    );
  }
}
