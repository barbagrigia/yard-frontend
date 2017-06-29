import React from 'react';
import { declOfNum } from './../utils';

export default props => (
  <span>
    {declOfNum(props.num, [props.firstDecl, props.secondDecl, props.thirdDecl])}
  </span>
);
