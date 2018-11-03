import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';

class Page1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="PageNumberOutOfTotalPages">
            <h3>1 of 4 pages</h3>
            <h3>[============]</h3>
        </div>
        <div className="Card QuestionCard">
            <h4>How are you feeling today?</h4>
            <p>Please answer on a scale of 1-5.</p>
            <p>1 being the lowest and 5 being the best.</p>
            <form>
                <input type="number" name="Scale 1-5: 
                    How are you feeling?" min="1" max="5" required />
                <input type="submit" value="Next ->" />
            </form>
        </div>
      </div>
    );
  }
}

export default connect()(Page1);
