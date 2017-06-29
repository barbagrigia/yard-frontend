import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';
import { get } from './../../api';
import Header from './Header';
import Carousel from './Carousel';
import Summary from './Summary';
import Offers from './Offers';
import Location from './Location';
import Directions from './Directions';

class Complex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    get(`/complexes/${this.props.match.params.id}`).then(complex =>
      this.setState(complex),
    );
  }

  render() {
    const { name, location = {}, statistics = {}, images = [] } = this.state;

    return (
      <div>
        <Helmet>
          <title>{`${name}`} | Compass Development</title>
        </Helmet>
        <BodyClassName className="complex">
          <main>
            <Header name={name} location={location} />
            <Carousel images={images} />
            <Summary statistics={statistics} />
            <Offers />
            <Location />
            <Directions />
          </main>
        </BodyClassName>
      </div>
    );
  }
}

export default Complex;
