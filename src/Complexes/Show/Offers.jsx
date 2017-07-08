/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Title from './Title';

const Offers = styled.section`
  padding-bottom: 4rem;
  padding-top: 4rem;
  background-color: #f4f5f9;
`;

const Offer = styled.div`
  background-color: #fff;
  margin-top: 1.5rem;
  padding: 1.5rem 2rem;
`;

const OfferTitle = styled.h3`
  color: #3e4247;
  font-family: "Philosopher";
  font-size: 1.25rem;
  line-height: 1.125;
  margin: 0 0 1.5rem;
`;

const Feature = styled.div`margin-bottom: 1.5rem;`;

const FeatureTitle = styled.div`
  color: #a9afb6;
  line-height: 1.375;
  margin-bottom: 0.625rem;
`;

const Text = styled.div`
  color: #3e4247;
  line-height: 1.375;
`;

const Wrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-family: "Fira Sans", "Helvetica", sans-serif;
  font-weight: 400;
  line-height: 1.0;
  border: none;
  border-radius: 2px;
  padding: 0.75rem 2rem;
`;

export default () =>
  (<Offers>
    <Grid>
      <Row center="lg">
        <Title>Предложения в ЖК «Полянка/44»</Title>
      </Row>
      <Row>
        <Col lg={4}>
          <Offer>
            <OfferTitle>1-комнатные квартиры</OfferTitle>
            <Feature>
              <FeatureTitle>Площадь</FeatureTitle>
              <Text>от 59 до 120 м²</Text>
            </Feature>
            <Feature>
              <FeatureTitle>Стоимость</FeatureTitle>
              <Text>от 20.3 до 84.2 млн руб</Text>
            </Feature>
            <Wrapper>
              <Button>Посмотреть предложения</Button>
            </Wrapper>
          </Offer>
        </Col>
        <Col lg={4}>
          <Offer>
            <OfferTitle>2-комнатные квартиры</OfferTitle>
            <Feature>
              <FeatureTitle>Площадь</FeatureTitle>
              <Text>от 59 до 120 м²</Text>
            </Feature>
            <Feature>
              <FeatureTitle>Стоимость</FeatureTitle>
              <Text>от 20.3 до 84.2 млн руб</Text>
            </Feature>
            <Wrapper>
              <Button>Посмотреть предложения</Button>
            </Wrapper>
          </Offer>
        </Col>
        <Col lg={4}>
          <Offer>
            <OfferTitle>3-комнатные квартиры</OfferTitle>
            <Feature>
              <FeatureTitle>Площадь</FeatureTitle>
              <Text>от 59 до 120 м²</Text>
            </Feature>
            <Feature>
              <FeatureTitle>Стоимость</FeatureTitle>
              <Text>от 20.3 до 84.2 млн руб</Text>
            </Feature>
            <Wrapper>
              <Button>Посмотреть предложения</Button>
            </Wrapper>
          </Offer>
        </Col>
      </Row>
    </Grid>
  </Offers>);
