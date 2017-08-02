/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import Title from './Title';
import { media } from '../../utils';

const Offers = styled.section`
  background-color: ${props => props.theme.otherGrey};
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${media.tablet`
    padding-top: 4rem;
    padding-bottom: 4rem;
  `};
`;

const OffersTitle = styled(Title)`
  text-align: left;
  ${media.tablet`
    text-align: center;
  `};
`;

const Row = styled.div`
  display: flex;
  overflow-x: auto;
  ${media.desktop`
    overflow-x: hidden;
  `};
`;

const Offer = styled.div`
  background-color: ${props => props.theme.white};
  flex: 1 0 17rem;
  margin-top: 1.5rem;
  padding: 1.5rem;
  ${media.desktop`
    flex: 1 0 0;
    padding: 1.5rem 2rem;
  `};

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const OfferTitle = styled.h3`
  color: ${props => props.theme.charcoalGrey};
  font-family: ${props => props.theme.philosopher};
  font-size: 1.25rem;
  line-height: 1.1;
  margin: 0 0 1.5rem;
  ${media.tablet`
    line-height: 1.125;
 `};
`;

const Feature = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const FeatureTitle = styled.div`
  color: ${props => props.theme.hueGrey};
  line-height: 1.375;
  margin-bottom: 0.625rem;
`;

const Text = styled.div`
  color: ${props => props.theme.charcoalGrey};
  line-height: 1.375;
`;

const Wrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const Button = styled.button`
  background-color: ${props => props.theme.blackSecondary};
  color: ${props => props.theme.white};
  cursor: pointer;
  font-family: ${props => props.theme.fira};
  font-weight: 400;
  line-height: 1;
  border: none;
  border-radius: 2px;
  padding: 0.75rem 1.35rem;
  ${media.desktop`
    padding: 0.75rem 2rem;
 `};

  &:focus {
    outline: none;
  }

  &:hover {
    transition: opacity 0.25s ease;
    will-change: opacity;
    opacity: 0.9;
  }
`;

type Props = {
  name: string,
};

export default ({ name }: Props) =>
  (<Offers>
    <Grid fluid>
      <OffersTitle>
        Предложения в ЖК «{name}»
      </OffersTitle>
      <Row>
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
      </Row>
    </Grid>
  </Offers>);
