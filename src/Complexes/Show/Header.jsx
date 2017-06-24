import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  padding-top: 1.5rem;
`;

const Title = styled.h1`
  fcolor: #3e4247;
  font-family: "Philosopher";
  font-size: 2rem;
  line-height: 1.125;
  margin: 0;
`;

const Address = styled.small`
  fcolor: #a9afb6;
  display: block;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.571;
  margin-top: 0.5rem;
`;

const Favorites = styled.button`
  background-color: transparent;
  border: 1px solid #e0e0e1;
  color: #00779a;
  cursor: pointer;
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 1.0;
  padding: 0.5rem 1rem;
`;

export default () => (
  <Grid>
    <Wrapper>
      <div>
        <Title>Жилой комплекс «Полянка/44»</Title>
        <Address>
          Район Якиманка, улица Большая Полянка, дом 44 • 119180
        </Address>
      </div>
      <Favorites>В избранное</Favorites>
    </Wrapper>
  </Grid>
);
