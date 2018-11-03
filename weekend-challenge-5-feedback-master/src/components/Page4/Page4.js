import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';

class Page4 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="PageNumberOutOfTotalPages">
            <h3>4 of 4 pages</h3>
            <h3>[============]</h3>
        </div>
        <div className="Card QuestionCard">
            <h4>Do you have any comments you want to leave?</h4>
            <p>Please answer in your own words.</p>
            <form>
                <input type="text" name="Do you have any comments you want
                  to leave?" required />
                <input type="submit" value="Submit v/ v/" />
            </form>
        </div>
      </div>
    );
  }
}

export default connect()(Page4);
