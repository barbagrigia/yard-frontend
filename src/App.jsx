import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Complexes from './Complexes/List';
import Complex from './Complexes/Show';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={Complexes} />
      <Route path="/complexes" component={Complex} />
      <Footer />
    </div>
  </Router>
);

export default App;
