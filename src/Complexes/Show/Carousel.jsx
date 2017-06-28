import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import { imagesUrl } from './../../api';
import Pluralizer from './Pluralizer';

const Images = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: scroll;
  position: relative;
`;

const Image = styled.img`
  height: 400px;
`;

const imagesSize = '512';

export default props => (
  <div>
    <Images>
      {props.images.map(image => (
        <Image
          key={image.id}
          src={`${imagesUrl}/${image.id}-jqestate-${imagesSize}`}
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
