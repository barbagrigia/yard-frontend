/* @flow */

import React, { Component } from 'react';
import styled from 'styled-components';
import { getImageUrl } from './../../utils';
import type { ImagesType } from './../types';

const Wrapper = styled.div`
  padding-bottom: calc(0.8125 * ${props => props.gutter});
  padding-top: ${props => props.gutter};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
`;

const Images = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  max-width: 100vw;

  @media (max-width: 1024px) {
    position: absolute;
    top: 50%;
    will-change: transform;
    transform: translate(0, -50%);
  }
`;

const Image = styled.img`
  cursor: pointer;
  max-height: calc(100vh - ${props => props.gutter} - 6.125rem);
  max-width: 80%;
  opacity: ${props => props.opacity};
  transition: transform .3s ease-out;
  will-change: transform, opacity;
  transform: ${props => props.transform};
  transform-origin: center bottom;

  @media (max-width: 1024px) {
    max-height: 100vh;
  }
`;

const Description = styled.div`
  color: #a9afb6;
  display: inline-block;
  font-weight: 300;
  line-height: 1.375;
  margin-top: 1.5rem;

  @media (max-width: 1024px) {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    padding: 0.125rem 0.25rem;
    will-change: transform, text-shadow;
    transform: translate(-50%, 0);
    text-shadow: 1px 1px 2px rgba(17, 17, 17, 0.9);
    background: rgba(17, 17, 17, 0.5);
  }
`;

const Close = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 1.125rem;
  height: 1.125rem;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    transition: transform .3s ease;
    will-change: transform;
    transform: scale(1.2);
  }

  &:before,
  &:after {
    position: absolute;
    left: 1.5rem;
    content: ' ';
    height: 1.5rem;
    width: 1px;
    background-color: #fff;
  }

  &:before {
    will-change: transform;
    transform: rotate(45deg);
  }

  &:after {
    will-change: transform;
    transform: rotate(-45deg);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

class Carousel extends Component {
  state = { active: this.props.active };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  getTransform = (i: number) => {
    const active = this.state.active;

    if (i === active) {
      return `translateX(calc(${-active * 100}% + 50vw - 50%))`;
    }
    return `translateX(calc(${-active * 100}% + ${i - active} *
      ${this.props.gutter} + 50vw - 50%)) scaleY(0.833)`;
  };

  setActive = (i: number) => {
    const imagesCount: number = this.props.images.length;

    if (i < 0) this.setState({ active: imagesCount - 1 });
    else if (i >= imagesCount) this.setState({ active: 0 });
    else this.setState({ active: i });
  };

  handleClick = (i: number) => (e: KeyboardEvent) => {
    e.stopPropagation();
    this.setActive(i === this.state.active ? i + 1 : i);
  };

  handleKeyDown = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === 'ArrowLeft') this.setActive(this.state.active - 1);
    if (e.key === 'ArrowRight') this.setActive(this.state.active + 1);
  };

  render() {
    const {
      images,
      name,
      gutter = '5vw',
    }: { images: ImagesType, name: string, gutter: string } = this.props;
    const { active }: { active: number } = this.state;
    const imagesCount: number = images.length;

    return (
      <Wrapper gutter={gutter} onClick={this.props.closeModal}>
        <Close onClick={this.props.closeModal} />
        <Images>
          {images.map((image, i) =>
            (<Image
              key={image.id}
              src={getImageUrl(image.id, 1024)}
              alt={`Фотография ${i + 1}/${imagesCount} ЖК ${name}`}
              title={`Фотография ${i + 1}/${imagesCount} ЖК ${name}`}
              transform={this.getTransform(i)}
              opacity={i === active ? 1.0 : 0.5}
              gutter={gutter}
              onClick={this.handleClick(i)}
            />),
          )}
        </Images>
        <Description>
          {active + 1}/{imagesCount} {name}
        </Description>
      </Wrapper>
    );
  }
}

export default Carousel;
