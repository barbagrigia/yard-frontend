import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Title from './Title';

const Features = styled.section`
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

const Feature = styled.dl`
  display: flex;
  line-height: 1.5625;
  margin: 0;

  &:first-child {
    margin-top: 1.125rem;
  }

  &:not(:last-child) {
    margin-bottom: 0.6875rem;
  }
`;

const Label = styled.dt`
  color: #a9afb6;
  width: 50%;
`;

const Value = styled.dd`
  color: #3e4247;
  font-weight: 500;
  margin-left: 0;
  width: 50%;
`;

export default props => (
  <Features>
    <Title>Характеристики</Title>
    <Row>
      <Col lg={4}>
        <Feature>
          <Label>Количество квартир:</Label>
          <Value>{props.statistics.propertiesCount}</Value>
        </Feature>
        <Feature>
          <Label>Статус:</Label>
          <Value>Квартиры</Value>
        </Feature>
        <Feature>
          <Label>Цены:</Label>
          <Value>от 5.3 до 143.5 млн</Value>
        </Feature>
      </Col>
      <Col lg={4}>
        <Feature>
          <Label>Количество квартир:</Label>
          <Value>{props.statistics.propertiesCount}</Value>
        </Feature>
        <Feature>
          <Label>Количество квартир:</Label>
          <Value>{props.statistics.propertiesCount}</Value>
        </Feature>
        <Feature>
          <Label>Количество квартир:</Label>
          <Value>{props.statistics.propertiesCount}</Value>
        </Feature>
      </Col>
      <Col lg={4}>
        <Feature>
          <Label>Количество квартир:</Label>
          <Value>{props.statistics.propertiesCount}</Value>
        </Feature>
        <Feature>
          <Label>Количество квартир:</Label>
          <Value>{props.statistics.propertiesCount}</Value>
        </Feature>
        <Feature>
          <Label>Количество квартир:</Label>
          <Value>{props.statistics.propertiesCount}</Value>
        </Feature>
      </Col>
    </Row>
  </Features>
);
