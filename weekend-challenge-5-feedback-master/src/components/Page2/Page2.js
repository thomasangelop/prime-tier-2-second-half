import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import './Page2.css';

const feedbackInputObject = {
  feeling: '',
  understanding: '',
  support: '',
  comments: '',
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

class Page2 extends Component {

  state = feedbackInputObject;

  handleChange = (event) => {
    console.log('handling change of understanding input');
    this.setState({
      [event.target.name]: parseInt(event.target.value),
    });
  }

  handleSubmit = (event) => {
    console.log('handling submit of understanding input');
    event.preventDefault();
    this.props.dispatch( { type: 'ENTERED_UNDERSTANDING_INFO', 
      payload: this.state} );
    //when form is submitted, this will send us to the next page
    window.location.hash = "3";
  }

  render() {
    return (
      <div>
        <Header />
        <div className="PageNumberOutOfTotalPages">
            {/* <h3>2 of 4 pages</h3> */}
            <div class="meter2">
              <span>40%</span>
            </div>
        </div>
        <div className="Card QuestionCard">
            <h4>How well are you understanding the content?</h4>
            <p>Please answer on a scale of 1-5.</p>
            <p>1 being the lowest and 5 being the best.</p>
            <form onSubmit={this.handleSubmit}>
                <input type="number" name="understanding" 
                    min="1" max="5" 
                    onChange={this.handleChange} 
                    value={this.state.comprehension} 
                    placeholder="5" required />
                <input type="submit" value="Next ->" />
            </form>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Page2);
