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
    this.load(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.load(nextProps.match.params.id);
    }
  }

  load(id) {
    get(`/complexes/${id}`).then(complex =>
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
