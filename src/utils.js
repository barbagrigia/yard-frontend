/* @flow */

import { imagesUrl } from './api';

export function getImageUrl(id: string, size: number = 512): string {
  return `${imagesUrl}/${id}-jqestate-${size}`;
}

// function declension of numerals
export function declOfNum(num: number, forms: Array<string>): string {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${num} ${forms[num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]]}`;
}
