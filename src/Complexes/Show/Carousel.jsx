import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';

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

export default () => (
  <div>
    <Images>
      <Image
        src={`${process.env.PUBLIC_URL}/img/complex_1.png`}
        alt="1st image"
      />
      <Image
        src={`${process.env.PUBLIC_URL}/img/complex_2.png`}
        alt="2nd image"
      />
      <Image
        src={`${process.env.PUBLIC_URL}/img/complex_3.png`}
        alt="3rd image"
      />
      <Image
        src={`${process.env.PUBLIC_URL}/img/complex_4.png`}
        alt="4th image"
      />
      <Image
        src={`${process.env.PUBLIC_URL}/img/complex_5.png`}
        alt="5th image"
      />
    </Images>
    <Grid>
      <Row>
        <Button>41 фотография</Button>
      </Row>
    </Grid>
  </div>
);
