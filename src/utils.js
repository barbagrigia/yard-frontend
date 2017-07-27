/* @flow */

import { css } from 'styled-components';
import { imagesUrl } from './api';

export function getImageUrl(id: string, size: number = 512): string {
  return `${imagesUrl}/${id}-${size}`;
}

// function declension of numerals
export function declOfNum(numeral: number, declensions: Array<string>): string {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${declensions[
    numeral % 100 > 4 && numeral % 100 < 20 ? 2 : cases[numeral % 10 < 5 ? numeral % 10 : 5]
  ]}`;
}

const sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 496,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  const remSize = (sizes[label] + 1) / 16;
  acc[label] = (...args: Array<any>) => css`
    @media (min-width: ${remSize}rem) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
