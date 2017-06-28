import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import { imagesUrl, imagesSize } from './../../api';

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

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${number} ${titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
}

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
        <Button>
          {declOfNum(props.images.length, [
            'фотография',
            'фотографии',
            'фотографий',
          ])}
        </Button>
      </Row>
    </Grid>
  </div>
);
