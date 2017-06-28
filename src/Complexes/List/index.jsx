import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';
import { Grid } from 'react-flexbox-grid';
import { get } from '../../api';
import Development from './Development';
import Intro from './Intro';
import Card from './Card';

function formatLocation(complex) {
  let location = '';

  if (complex.location.subLocalityName) {
    location = `${complex.location.subLocalityName}, `;
  }
  location += `${complex.location.street}, ${complex.location.house}`;

  return location;
}

class Complexes extends Component {
  constructor(props) {
    super(props);
    this.state = { complexes: [] };
    this.load = this.load.bind(this);
  }

  componentDidMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.load(nextProps);
  }

  load(props) {
    get(`${props.match.url}`).then((json) => {
      this.setState({ complexes: json.items });
    });
  }

  render() {
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
              {this.state.complexes
                .filter(complex => complex.state === 'public')
                .map(complex => (
                  <Card
                    key={complex.id}
                    id={complex.id}
                    location={formatLocation(complex)}
                    name={complex.name}
                    img={complex.images[0].id}
                  />
                ))}
            </Grid>
          </main>
        </BodyClassName>
      </div>
    );
  }
}

export default Complexes;
