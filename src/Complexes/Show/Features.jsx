/* @flow */

import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import { media } from '../../utils';
import type { StatisticsType, DetailsType, RangeType } from '../types';
import { kinds, securityKinds, quarters, constructionKinds } from '../dictionaries';

const Row = styled.div`
  display: flex;
  overflow-x: auto;
  margin-left: -1rem;
  margin-right: -1rem;
  ${media.tablet`
    margin-left: 0;
    margin-right: 0;
  `};
`;

const Col = styled.div`
  flex: 1 0 24.3125rem;

  &:first-child {
    margin-left: 1rem;
    ${media.tablet`
      margin-left: 0;
    `};
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Features = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${media.tablet`
    padding-top: 2rem;
    padding-bottom: 3rem;
  `};
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
  color: ${props => props.theme.hueGrey};
  width: 50%;
`;

const Value = styled.dd`
  color: ${props => props.theme.charcoalGrey};
  font-weight: 500;
  margin-left: 0;
  width: 50%;
`;

type Props = {
  statistics: StatisticsType,
  details: DetailsType,
};

function formatCeilHeight({ from, to }: RangeType): string {
  if (from === to) {
    return `${Math.round(from * 100) / 100}`;
  }
  return `${Math.round(from * 100) / 100} - ${Math.round(to * 100) / 100}`;
}

export default ({ statistics, details }: Props) => {
  const {
    propertiesCount,
    price: { from: { rub: priceFromRub } = {}, to: { rub: priceToRub } = {} } = {},
    totalArea: { from: totalAreaFrom, to: totalAreaTo } = {},
  } = statistics;
  const {
    propertyKind,
    security,
    constructionKind,
    ceilHeight,
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
        <Col>
          {propertiesCount &&
            <Feature>
              <Label>Количество квартир</Label>
              <Value>
                {propertiesCount}
              </Value>
            </Feature>}
          {propertyKind &&
            <Feature>
              <Label>Статус</Label>
              <Value>
                {kinds[propertyKind]}
              </Value>
            </Feature>}
          {priceFromRub &&
            priceToRub &&
            <Feature>
              <Label>Цены</Label>
              <Value>
                от {(priceFromRub / 1000000).toFixed(1)} до {(priceToRub / 1000000).toFixed(1)} млн
              </Value>
            </Feature>}
          {security &&
            <Feature>
              <Label>Безопасность</Label>
              <Value>
                {securityKinds[security]}
              </Value>
            </Feature>}
        </Col>
        <Col>
          {constructionKind &&
            <Feature>
              <Label>Конструкция корпусов</Label>
              <Value>
                {constructionKinds[constructionKind]}
              </Value>
            </Feature>}
          {totalAreaFrom &&
            totalAreaTo &&
            <Feature>
              <Label>Площадь</Label>
              <Value>
                от {Math.round(totalAreaFrom)} до {Math.round(totalAreaTo)} м²
              </Value>
            </Feature>}
          {ceilHeight &&
            <Feature>
              <Label>Высота потолков</Label>
              <Value>
                {formatCeilHeight(ceilHeight)} м
              </Value>
            </Feature>}
          {maintenanceCosts &&
            <Feature>
              <Label>Обслуживание</Label>
              <Value>
                {maintenanceCosts} руб / м² / месяц
              </Value>
            </Feature>}
        </Col>
        <Col>
          {startQuarter &&
            startYear &&
            <Feature>
              <Label>Начало строительства</Label>
              <Value>
                {quarters[startQuarter]} квартал {startYear} года
              </Value>
            </Feature>}
          {commissioningQuarter &&
            commissioningYear &&
            <Feature>
              <Label>Конец строительства</Label>
              <Value>
                {quarters[commissioningQuarter]} квартал {commissioningYear} года
              </Value>
            </Feature>}
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
