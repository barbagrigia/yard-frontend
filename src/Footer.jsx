/* @flow */

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link as RouterLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

import arrowImg from './img/arrow.svg';
import { media } from './utils';

const Footer = styled.footer`
  background-color: ${props => props.theme.blackThree};
  padding-top: 2rem;
  padding-bottom: 3rem;
  ${media.tablet`
    padding-bottom: 1.75rem;
  `};
`;

const Line = styled.hr`
  background-color: ${props => props.theme.charcoalGrey};
  border: none;
  height: 2px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  ${media.tablet`
    margin-top: 0;
  `};
`;

const Title = styled.h4`
  color: ${props => props.theme.slateGrey};
  font-size: 0.875rem;
  line-height: 1.572;
  margin: 0;
`;

const Credentials = styled.p`
  color: ${props => props.theme.hueGrey};
  display: block;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.572;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-top: 1rem;
    ${media.tablet`
      margin-bottom: 0;
    `};
  }
`;

const Link = styled(RouterLink)`
  color: ${props => props.theme.hueGrey};
  display: block;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.572;
  margin-top: 0.5rem;
  margin-bottom: 0;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const ArrowedLink = Link.extend`
  margin-top: 1rem;

  &:after {
    margin-left: 0.5rem;
    content: url(${arrowImg});
  }
`;

const Disclaimer = styled.p`
  font-size: 0.6875rem;
  font-weight: 300;
  color: ${props => props.theme.hueGrey};
  line-height: 1.6364;
  margin: 0;
  padding-top: 3rem;
  ${media.tablet`
    padding-top: 6rem;
  `};
`;

export default () =>
  (<Footer>
    <MediaQuery maxWidth={1199}>
      <Grid fluid>
        <Row>
          <Col xs={12} sm={3} md={2}>
            <Title>ООО «Ярд»</Title>
            <Credentials>ОГРН 1175074002531</Credentials>
            <Credentials>ИНН 5036165365</Credentials>
            <Credentials>+7 (999) 821-14-88</Credentials>
          </Col>
          <Col xs={12} smOffset={3} sm={3} mdOffset={2} md={2}>
            <Line />
            <Title>Жилые комплексы</Title>
            <Link to="#">ВТБ Арена Парк</Link>
            <Link to="#">Садовые кварталы</Link>
            <Link to="#">Резиденция Монэ</Link>
            <ArrowedLink to="#">Все ЖК Москвы</ArrowedLink>
          </Col>
          <Col xs={12} sm={3} md={2}>
            <Line />
            <Title>Компания</Title>
            <Link to="#">Команда</Link>
            <Link to="#">О компании</Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} smOffset={6} sm={6} mdOffset={4} md={8}>
            <Disclaimer>
              Любая информация, представленная на данном сайте, носит исключительно информационный
              характер и ни при каких условиях не является публичной офертой, определяемой
              положениями статьи 437 ГК РФ. © ООО «Ярд», 2017
            </Disclaimer>
          </Col>
        </Row>
      </Grid>
    </MediaQuery>
    <MediaQuery minWidth={1200}>
      <Grid>
        <Row>
          <Col xs={12} sm={3} md={2}>
            <Title>ООО «Ярд»</Title>
            <Credentials>ОГРН 1175074002531</Credentials>
            <Credentials>ИНН 5036165365</Credentials>
            <Credentials>+7 (999) 821-14-88</Credentials>
          </Col>
          <Col xs={12} smOffset={3} sm={3} mdOffset={2} md={2}>
            <Line />
            <Title>Жилые комплексы</Title>
            <Link to="#">ВТБ Арена Парк</Link>
            <Link to="#">Садовые кварталы</Link>
            <Link to="#">Резиденция Монэ</Link>
            <ArrowedLink to="#">Все ЖК Москвы</ArrowedLink>
          </Col>
          <Col xs={12} sm={3} md={2}>
            <Line />
            <Title>Компания</Title>
            <Link to="#">Команда</Link>
            <Link to="#">О компании</Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} smOffset={6} sm={6} mdOffset={4} md={8}>
            <Disclaimer>
              Любая информация, представленная на данном сайте, носит исключительно информационный
              характер и ни при каких условиях не является публичной офертой, определяемой
              положениями статьи 437 ГК РФ. © ООО «Ярд», 2017
            </Disclaimer>
          </Col>
        </Row>
      </Grid>
    </MediaQuery>
  </Footer>);
