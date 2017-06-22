/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';
import { Grid } from 'react-flexbox-grid';
import Development from './Development';
import Intro from './Intro';
import Card, { Info } from './Card';

export default () => (
  <div>
    <Helmet>
      <title>Complexes | Compass Development</title>
    </Helmet>
    <BodyClassName className="complexes">
      <main>
        <Development />
        <Intro />
        <Grid>
          <Card
            id={1}
            location="SOUTH BEACH, SAN FRANCISCO"
            name="764 Metropolitan Avenue"
          >
            <Info>
              The Lewis Steel Building is a masterful industrial conversion
              located in the heart of Williamsburg. Located at 76 North 4th
              Street, the former 1930's steel factory has been transformed
              into 83 individually unique and luxury loft apartments.
            </Info>
          </Card>
          <Card
            id={2}
            location="MIDTOWN EAST, MANHATTAN"
            name="100 East 53rd Street"
          >
            <Info>
              One Hundred East Fifty Third Street by Foster + Partners is a
              limited collection of modern residences in Midtown Manhattan's
              Cultural District. The 94 residences ranging from alcove
              lofts to four bedrooms within the 63-story tower are generously
              proportioned.
            </Info>
          </Card>
          <Card id={3} location="NOLITA, MANHATTAN" name="152 Elizabeth">
            <Info>
              152 Elizabeth is an ultra-luxury condominium building—the first
              in New York City designed by Japanese master architect Tadao
              Ando. Located at the corner of Kenmare and Elizabeth Streets
              in Nolita, the 32,000-square-foot building will stand as a
              profound architectural statement and embrace the industrial
              character of the neighborhood.
            </Info>
          </Card>
        </Grid>
      </main>
    </BodyClassName>
  </div>
);
