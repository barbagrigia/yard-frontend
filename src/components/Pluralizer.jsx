import React from 'react';
import { declOfNum } from './../utils';

export default props => (
  <span>
    {declOfNum(props.num, [props.one, props.few, props.other])}
  </span>
);
