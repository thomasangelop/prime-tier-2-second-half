import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';

const feedbackInputObject = {
  feeling: '',
  understanding: '',
  support: '',
  comments: '',
}

class Page5 extends Component {

  handleClick = (event) => {
    console.log('sending user back to leave new feedback');
    event.preventDefault();
    window.location.hash = "";
    this.clearFeedbackInputObject();
  }

  clearFeedbackInputObject = () => {
    this.setState(feedbackInputObject);
    console.log('cleared feedbackInputObject');
  }

  render() {
    return (
      <div>
        <Header />
        <div className="Card">
          <h4>Thank you!</h4>
          <button onClick={this.handleClick}>Leave New Feedback</button>
        </div>
      </div>
    );
  }
}

export default connect()(Page5);
