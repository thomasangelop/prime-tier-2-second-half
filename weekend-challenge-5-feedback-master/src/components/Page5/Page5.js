import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';

class Page5 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Card">
          <h4>Thank you!</h4>
          <button>Leave New Feedback</button>
        </div>
      </div>
    );
  }
}

export default connect()(Page5);
