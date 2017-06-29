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

const Button = styled.button`
  background-color: #00779a;
  border: none;
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: "Fira Sans", "Helvetica", sans-serif;
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 1.0;
  margin-top: -2.625rem;
  padding: 0.5rem 1rem;
  position: absolute;
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
        <Button>
          <Pluralizer
            num={props.images.length}
            one="фотография"
            few="фотографии"
            other="фотографий"
          />
        </Button>
      </Row>
    </Grid>
  </div>
);
