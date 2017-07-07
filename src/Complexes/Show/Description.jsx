/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Title from './Title';

const Description = styled.section`padding-bottom: 1.5rem;`;

const Article = styled.article`
  color: #3e4247;
  line-height: 1.5625;
  margin: 0 0 1.5rem;
  text-indent: 0;
  white-space: pre-line;
`;

type Props = {
  fullDescription: string,
};

export default ({ fullDescription }: Props) =>
  (<Description>
    <Row>
      <Col lg={2}>
        <Title>Описание</Title>
      </Col>
      <Col lg={10}>
        <Article>
          {fullDescription}
        </Article>
      </Col>
    </Row>
  </Description>);
