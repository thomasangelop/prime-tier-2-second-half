import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import Page2 from '../Page2/Page2';

const feedbackInputObject = {
  feeling: '',
  comprehension: '',
  support: '',
  comments: '',
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

class Page1 extends Component {
  state = feedbackInputObject;

  handleChange = (event) => {
    console.log('handling change of feeling input');
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    console.log('handling submit of feeling input');
    event.preventDefault();
    this.props.dispatch( { type: 'ENTERED_FEELING_INFO ', 
      payload: this.state} );
    //when form is submitted, this will send us to the next page
    window.location.hash = "2";
  }

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
            <form onSubmit={this.handleSubmit}>
                <input type="number" name="feeling" min="1" max="5" 
                    onChange={this.handleChange}
                    value={this.state.feeling} required 
                    placeholder="5"/>
                <input type="submit" value="Next ->" 
                  />
            </form>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Page1);
