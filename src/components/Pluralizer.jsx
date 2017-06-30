/* @flow */

import React from 'react';
import { declOfNum } from './../utils';

type Props = {
  num: number,
  one: string,
  few: string,
  other: string,
};

export default ({ num, one, few, other }: Props) => (
  <span>
    {declOfNum(num, [one, few, other])}
  </span>
);
