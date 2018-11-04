import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';

const feedbackInputObject = {
  feeling: '',
  comprehension: '',
  support: '',
  comments: '',
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });


class Page4 extends Component {
  state = feedbackInputObject;

  handleChange = (event) => {
    console.log('handling change of comments input');
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    console.log('handling submit of comments input');
    event.preventDefault();
    this.props.dispatch( { type: 'ENTERED_COMMENTS_INFO ', 
      payload: this.state} );
    //when form is submitted, this will send us to the next page
    window.location.hash = "5";
  }
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
            <form onSubmit={this.handleSubmit} >
                <input type="text" name="comments" 
                onChange={this.handleChange}
                value={this.state.comments}  
                placeholder="The lecture today was awesome!" required />
                <input type="submit" value="Submit v/ v/" />
            </form>
        </div>
      </div>
    );
  }
}

export default connect()(Page4);
