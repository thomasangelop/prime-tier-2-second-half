import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback Portal</h1>
        </header>
        <br/>
      </div>
    );
  }
}

export default connect()(Header);
