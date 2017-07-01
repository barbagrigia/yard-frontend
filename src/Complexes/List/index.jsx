/* @flow */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';
import { Grid } from 'react-flexbox-grid';
import { get } from '../../api';
import Development from './Development';
import Intro from './Intro';
import Card from './Card';
import type { ComplexType } from './../types';

class Complexes extends Component {
  state: {
    complexes: Array<ComplexType>,
  } = {
    complexes: [],
  };

  componentDidMount() {
    get('/complexes?filter[state]=public').then(({ items: complexes }) =>
      this.setState({ complexes }),
    );
  }

  render() {
    const { complexes = [] } = this.state;

    return (
      <div>
        <Helmet>
          <title>Complexes | Compass Development</title>
        </Helmet>
        <BodyClassName className="complexes">
          <main>
            <Development />
            <Intro />
            <Grid>
              {complexes.map(complex => (
                <Card
                  key={complex.id}
                  id={complex.id}
                  location={complex.location}
                  name={complex.name}
                  img={complex.images[0].id}
                >
                  →
                </Card>
              ))}
            </Grid>
          </main>
        </BodyClassName>
      </div>
    );
  }
}

export default Complexes;
