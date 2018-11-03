import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

//page imports
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
import Page5 from '../Page5/Page5';
import Admin from '../Admin/Admin';


class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <div className="PageRoutes">
            <Route exact path="/" component= {Page1} />
            <Route path="/2" component= {Page2} />
            <Route path="/3" component= {Page3} />
            <Route path="/4" component= {Page4} />
            <Route path="/5" component= {Page5} />
            <Route path="/admin" component= {Admin} />
            </div>
          </div>
      </Router>
    );
  }
}

export default connect()(App);
