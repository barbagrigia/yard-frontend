import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: #3e4247;
  font-family: "Philosopher";
  font-size: 1.5rem;
  line-height: 1.125;
  margin: 0;

  &:not(:first-child) {
    margin-left: 3rem;
  }
`;

export default props => <Title>{props.children}</Title>;
