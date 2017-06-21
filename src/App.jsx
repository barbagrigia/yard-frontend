import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Complexes from './Complexes/List';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={Complexes} />
      <Footer />
    </div>
  </Router>
);

export default App;
