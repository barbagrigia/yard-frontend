import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Complex = styled(Link)`
  background-color: #fff;
  border-bottom: solid 0.125rem #646971;
  display: flex;
  margin-bottom: 3rem;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.3);
    transition: box-shadow .25s ease;
  }

  &:last-child {
    margin-bottom: 6rem;
  }
`;

const Image = styled.div`
  background-clip: content-box;
  background-image: url(img/complex-2.jpg);
  background-position: 50%;
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  flex-basis: 41.66666667%;
  height: 350px;
  padding-right: 0.5rem;
`;

const Description = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-basis: 58.33333333%;
  flex-flow: column;
  padding: 1.5rem 6.25rem 1.5rem 0.5rem;
`;

const Location = styled.p`
  color: #646971;
  font-family: "Monaco", "Consolas", "Lucida Console", monospace;
  line-height: 1.25;
  margin: 0;
`;

const Address = styled.h3`
  color: #000;
  font-size: 2.5rem;
  line-height: 1.4;
  margin: 1.5rem 0 0 0;
`;

const Info = styled.p`
  color: #3e4247;
  line-height: 1.5;
  margin: 0.5rem 0 0 0;
`;

export default props => (
  <Complex to={`/complexes/${props.id}`}>
    <Image
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/complex-${props.id}.jpg)`,
      }}
    />
    <Description>
      <Location>{props.location}</Location>
      <Address>{props.address}</Address>
      <Info>{props.info}</Info>
    </Description>
  </Complex>
  );
