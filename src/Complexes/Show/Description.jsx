/* @flow */

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Title from './Title';
import { media } from '../../utils';

const Wrapper = styled.section`
  padding-bottom: 1rem;
  ${media.tablet`
    padding-bottom: 1.5rem;
  `};
`;

const Article = styled.article`
  color: ${props => props.theme.charcoalGrey};
  line-height: 1.5625;
  text-indent: 0;
  white-space: pre-line;
  margin: 1rem 0 0;
  max-height: ${props => (props.isOpened ? 'none' : '21.875rem')};
  overflow: hidden;
  ${media.tablet`
    margin: 0;
    max-height: none;
  `};
`;

const OpenMore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), #fff);
  height: 8rem;
  width: 100%;
  margin-top: -8rem;
  margin-bottom: 0.125rem;
  ${media.tablet`
    display: none;
  `};
`;

const OpenMoreButton = styled.button`
  position: relative;
  display: block;
  background-color: ${props => props.theme.ocean};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-family: ${props => props.theme.fira};
  font-weight: 300;
  font-size: 0.625rem;
  line-height: 0.625rem;
  color: ${props => props.theme.white};
  margin: 0 auto;
  padding: 0.5rem 1.25rem;

  &:focus {
    outline: none;
  }

  &:hover {
    transition: opacity 0.25s ease;
    will-change: opacity;
    opacity: 0.9;
  }
`;

type Props = { fullDescription: string };
type State = { isOpened: boolean };

export default class Description extends Component<void, Props, State> {
  state = { isOpened: false };

  openMore = () => {
    this.setState({ isOpened: true });
  };

  render() {
    const { isOpened } = this.state;
    const { fullDescription } = this.props;

    return (
      <Wrapper>
        <Row>
          <Col xs={12} sm={2}>
            <Title>Описание</Title>
          </Col>
          <Col xs={12} sm={10}>
            <Article isOpened={isOpened}>
              {fullDescription}
            </Article>
            {!isOpened &&
              <OpenMore>
                <OpenMoreButton onClick={this.openMore}>Прочитать описание</OpenMoreButton>
              </OpenMore>}
          </Col>
        </Row>
      </Wrapper>
    );
  }
}
