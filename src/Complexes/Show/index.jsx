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

function formatAddress(complex) {
  let address = '';

  if (complex.location.subLocalityName) {
    address = `${complex.location.subLocalityName}, `;
  }
  address += `${complex.location.street},
    ${complex.location.house} • ${complex.location.postalCode}`;

  return address;
}

class Complex extends Component {
  constructor(props) {
    super(props);
    this.state = { complex: null };
  }

  componentDidMount() {
    get(`${this.props.match.url}`).then(json =>
      this.setState({ complex: json }),
    );
  }

  render() {
    return (
      this.state.complex &&
      <div>
        <Helmet>
          <title>{this.state.complex.name} | Compass Development</title>
        </Helmet>
        <BodyClassName className="complex">
          <main>
            <Header
              name={this.state.complex.name}
              address={formatAddress(this.state.complex)}
            />
            <Carousel images={this.state.complex.images} />
            <Summary statistics={this.state.complex.statistics} />
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
