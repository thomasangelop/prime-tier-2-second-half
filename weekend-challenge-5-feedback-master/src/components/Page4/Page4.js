import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import axios from 'axios';
import './Page4.css';

const feedbackInputObject = {
  feeling: '',
  understanding: '',
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
    this.props.dispatch( { type: 'ENTERED_COMMENTS_INFO', 
      payload: this.state} );
      console.log('what is redux state', this.props.reduxState);
      
    //when form is submitted, this will send us to the next page
    window.location.hash = "5";
    this.addFeedbackToAdminDatabase();
  }


  addFeedbackToAdminDatabase = () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: this.props.reduxState
    })
    .then( ( response ) => {
      console.log('POST was made');
      
      console.log('Feedback successfully submitted', response);
    })
    .catch( (error) => {
      console.log('Bad things happened! Oh no!', error);
    })
  }

  

  render() {
    return (
      <div>
        <Header />
        <div className="PageNumberOutOfTotalPages">
            {/* <h3>4 of 4 pages</h3> */}
            <div class="meter4">
              <span>80%</span>
            </div>
        </div>
        <div className="Card QuestionCard">
            <h4>Do you have any comments you want to leave?</h4>
            <p>Please answer in your own words.</p>
            <form onSubmit={this.handleSubmit} >
                <input type="text" name="comments" 
                onChange={this.handleChange}
                value={this.state.comments}  
                placeholder="The lecture today was awesome!" required />
                <input type="submit" value="Submit" />
            </form>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Page4);
