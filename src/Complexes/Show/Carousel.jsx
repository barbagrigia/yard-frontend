import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import { getImageUrl } from './../../utils';
import Pluralizer from './../../components/Pluralizer';

const Images = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: scroll;
  position: relative;
`;

const Image = styled.img`
  height: 400px;
`;

export default props => (
  <div>
    <Images>
      {props.images.map(image => (
        <Image
          key={image.id}
          src={`${getImageUrl(image.id)}`}
          alt={`Image ${image.id}`}
        />
      ))}
    </Images>
    <Grid>
      <Row>
        <Pluralizer imagesCount={props.images.length} />
      </Row>
    </Grid>
  </div>
);
