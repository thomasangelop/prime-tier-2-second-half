import React, { Component } from 'react';
import '../Header/Header';
import { connect } from 'react-redux';

class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Admin Portal for Feedback</h1>
        <h3>Here is the feedback stored:</h3>
        <div className="Card FeedbackTable">
          <table>
            <thead>
              <th>Feeling</th><th>Comprehension</th><th>Support</th>
                <th>Comments</th><th>Delete</th>
            </thead>
            <tbody>
              <td>4</td><td>4</td><td>5</td><td>Loved the demo!</td>
                <td><button>[X]</button></td>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect()(Admin);
