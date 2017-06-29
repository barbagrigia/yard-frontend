import { imagesUrl } from './api';

// function declension of numerals
export function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${number} ${titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
}

export function getImageUrl(id, size = 512) {
  return `${imagesUrl}/${id}-jqestate-${size}`;
}
