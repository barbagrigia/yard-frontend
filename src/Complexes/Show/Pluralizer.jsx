import React from 'react';
import styled from 'styled-components';
import { declOfNum } from './../utils';

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
  <Button>
    {declOfNum(props.imagesCount, ['фотография', 'фотографии', 'фотографий'])}
  </Button>
);
