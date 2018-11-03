import React, { Component } from 'react';
import '../Header/Header';
import { connect } from 'react-redux';

class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Admin Portal for Feedback</h1>
        <h3>Here is the feedback stored:</h3>
      </div>
    );
  }
}

export default connect()(Admin);
