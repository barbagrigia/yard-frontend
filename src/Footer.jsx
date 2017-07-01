/* @flow */

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import arrowImg from './img/arrow.svg';

const Footer = styled.footer`
  background-color: #111111;
  padding-bottom: 1.75rem;
  padding-top: 2rem;
`;

const Line = styled.hr`
  background-color: #3E4247;
  border: none;
  height: 2px;
  margin: 0 0 1rem 0;
`;

const Title = styled.h4`
  color: #646971;
  font-size: 0.875rem;
  line-height: 1.375rem;
  margin: 0;
`;

const Credentials = styled.p`
  color: #a9afb6;
  display: block;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.375rem;
  margin-top: 0.5rem;
  margin-bottom: 0;

  &:last-child {
    margin-top: 1rem;
  }
`;

const Link = styled(RouterLink)`
  color: #a9afb6;
  display: block;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.375rem;
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
    margin-left: .5rem;
    content: url(${arrowImg});
  }
`;

const Disclaimer = styled.p`
  font-size: 0.6875rem;
  font-weight: 300;
  color: #a9afb6;
  line-height: 1.125rem;
  margin: 6rem 0 0;
`;

export default () => (
  <Footer>
    <Grid>
      <Row>
        <Col lg={2}>
          <Title>ООО «Ярд»</Title>
          <Credentials>ОГРН 1175074002531</Credentials>
          <Credentials>ИНН 5036165365</Credentials>
          <Credentials>+7 (999) 821-14-88</Credentials>
        </Col>
        <Col lgOffset={2} lg={2}>
          <Line />
          <Title>Жилые комплексы</Title>
          <Link to="#">ВТБ Арена Парк</Link>
          <Link to="#">Садовые кварталы</Link>
          <Link to="#">Резиденция Монэ</Link>
          <ArrowedLink to="#">Все ЖК Москвы</ArrowedLink>
        </Col>
        <Col lg={2}>
          <Line />
          <Title>Компания</Title>
          <Link to="#">Команда</Link>
          <Link to="#">О компании</Link>
        </Col>
      </Row>
      <Row>
        <Col lgOffset={4} lg={8}>
          <Disclaimer>
            Любая информация, представленная на данном сайте, носит
            исключительно информационный характер и ни при каких условиях
            не является публичной офертой, определяемой положениями статьи
            437 ГК РФ. © ООО «Ярд», 2017
          </Disclaimer>
        </Col>
      </Row>
    </Grid>
  </Footer>
);
