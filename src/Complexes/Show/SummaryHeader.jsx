import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const Header = styled.header`
  display: flex;
  padding-bottom: 1.5em;
  padding-top: 1.5rem;
`;

const Subtitle = styled.small`
  color: #a9afb6;
  display: block;
  font-family: "Fira Sans", "Helvetica", sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.571;
  margin-top: 0.625rem;
`;

export default () => (
  <Header>
    <Title>
      950
      <Subtitle>
        предложений
      </Subtitle>
    </Title>
    <Title>
      John McAslan + Partners
      <Subtitle>
        архитектор
      </Subtitle>
    </Title>
    <Title>
      Группа «ПСН»
      <Subtitle>
        застройщик
      </Subtitle>
    </Title>
  </Header>
);
