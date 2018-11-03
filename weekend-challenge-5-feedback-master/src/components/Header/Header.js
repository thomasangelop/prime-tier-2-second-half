import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">*---------Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    );
  }
}

export default connect()(Header);
