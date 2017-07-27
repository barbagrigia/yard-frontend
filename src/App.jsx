/* @flow */

import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Complexes from './Complexes/List';
import Complex from './Complexes/Show';
import theme from './theme';

export default () =>
  (<ThemeProvider theme={theme}>
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/complexes" component={Complexes} />
            <Route path="/complexes/:slug" component={Complex} />
            <Redirect from="/" to="/complexes" />
          </Switch>
        </ScrollToTop>
        <Footer />
      </div>
    </Router>
  </ThemeProvider>);
