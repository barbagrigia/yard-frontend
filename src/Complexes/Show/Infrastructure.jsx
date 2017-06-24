import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Title from './Title';

const Infrastructure = styled.section`
  padding-bottom: 4rem;
  padding-top: 2rem;
`;

const Text = styled.p`
  color: #3e4247;
  line-height: 1.375;
  margin: 0;

  &:first-child {
    margin-top: 1rem;
  }

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export default () => (
  <Infrastructure>
    <Title>Инфраструктура</Title>
    <Row>
      <Col lg={2}>
        <Text>Бассейн</Text>
      </Col>
      <Col lg={2}>
        <Text>Детский сад</Text>
      </Col>
      <Col lg={2}>
        <Text>Частная школа</Text>
      </Col>
      <Col lg={2}>
        <Text>Бассейн</Text>
      </Col>
      <Col lg={2}>
        <Text>Детский сад</Text>
      </Col>
      <Col lg={2}>
        <Text>Частная школа</Text>
      </Col>
      <Col lg={2}>
        <Text>Частная школа</Text>
      </Col>
      <Col lg={2}>
        <Text>Частная школа</Text>
      </Col>
      <Col lg={2}>
        <Text>Частная школа</Text>
      </Col>
    </Row>
  </Infrastructure>
);
