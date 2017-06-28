import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Complexes from './Complexes/List';
import Complex from './Complexes/Show';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/complexes/" component={Complexes} />
        <Route exact path="/complexes/:id" component={Complex} />
        <Redirect from="/" to="/complexes/" />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
