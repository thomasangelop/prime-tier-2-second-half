import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';

class Page2 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="PageNumberOutOfTotalPages">
            <h3>2 of 4 pages</h3>
            <h3>[============]</h3>
        </div>
      </div>
    );
  }
}

export default connect()(Page2);
