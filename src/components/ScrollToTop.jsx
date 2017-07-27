/* @flow */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

type Props = { location: Object, children: React.Element<*> };

class ScrollToTop extends Component<void, Props, void> {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
