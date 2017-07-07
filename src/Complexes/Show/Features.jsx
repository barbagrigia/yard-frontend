/* @flow */

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Title from './Title';
import type { StatisticsType, DetailsType } from './../types';
import { kinds, securityKinds, quarters, constructionKinds } from '../dictionaries';

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

type Props = {
  statistics: StatisticsType,
  details: DetailsType,
};

export default ({ statistics, details }: Props) => {
  const { propertiesCount, price = {}, totalArea = {} } = statistics;
  const { from = {}, to = {} } = price;
  const {
    propertyKind,
    security,
    constructionKind,
    ceilHeight = {},
    maintenanceCosts,
    startQuarter,
    startYear,
    commissioningQuarter,
    commissioningYear,
    parkings,
    undergroundGarages,
  } = details;

  return (
    <Features>
      <Title>Характеристики</Title>
      <Row>
        <Col lg={4}>
          <Feature>
            <Label>Количество квартир</Label>
            <Value>
              {propertiesCount}
            </Value>
          </Feature>
          <Feature>
            <Label>Статус</Label>
            <Value>
              {propertyKind && kinds[propertyKind]}
            </Value>
          </Feature>
          <Feature>
            <Label>Цены</Label>
            <Value>
              от {(from.rub / 1000000).toFixed(1)} до {(to.rub / 1000000).toFixed(1)} млн
            </Value>
          </Feature>
          <Feature>
            <Label>Безопасность</Label>
            <Value>
              {security && securityKinds[security]}
            </Value>
          </Feature>
        </Col>
        <Col lg={4}>
          <Feature>
            <Label>Конструкция корпусов</Label>
            <Value>
              {constructionKind && constructionKinds[constructionKind]}
            </Value>
          </Feature>
          <Feature>
            <Label>Площадь</Label>
            <Value>
              от {Math.round(totalArea.from)} до {Math.round(totalArea.to)} м²
            </Value>
          </Feature>
          <Feature>
            <Label>Высота потолков</Label>
            <Value>
              {ceilHeight.from !== ceilHeight.to
                ? `${Math.round(ceilHeight.from * 100) / 100} - ${Math.round(ceilHeight.to * 100) /
                    100}`
                : Math.round(ceilHeight.to * 100) / 100}{' '}
              м
            </Value>
          </Feature>
          <Feature>
            <Label>Обслуживание</Label>
            <Value>
              {maintenanceCosts} руб / м² / месяц
            </Value>
          </Feature>
        </Col>
        <Col lg={4}>
          <Feature>
            <Label>Начало строительства</Label>
            <Value>
              {startQuarter && quarters[startQuarter]} квартал {startYear} года
            </Value>
          </Feature>
          <Feature>
            <Label>Конец строительства</Label>
            <Value>
              {commissioningQuarter && quarters[commissioningQuarter]} квартал {commissioningYear}{' '}
              года
            </Value>
          </Feature>
          <Feature>
            <Label>Наземная парковка</Label>
            <Value>
              {parkings ? `${parkings} м/м` : 'Нет'}
            </Value>
          </Feature>
          <Feature>
            <Label>Подземная парковка</Label>
            <Value>
              {undergroundGarages ? `${undergroundGarages} м/м` : 'Нет'}
            </Value>
          </Feature>
        </Col>
      </Row>
    </Features>
  );
};
