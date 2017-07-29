/* @flow */

import React from 'react';

import { declOfNum } from './../utils';

type Props = {
  numeral: number,
  one: string,
  few: string,
  other: string,
};

export default ({ numeral, one, few, other }: Props) =>
  (<span>
    {declOfNum(numeral, [one, few, other])}
  </span>);
