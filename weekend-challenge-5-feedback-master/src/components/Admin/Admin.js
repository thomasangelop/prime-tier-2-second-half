import React, { Component } from 'react';
import '../Header/Header';
import { connect } from 'react-redux';
import axios from 'axios';
import AFeedbackList from '../AFeedbackList/AFeedbackList';
import './Admin.css';

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

class Admin extends Component {

  componentDidMount() {
    this.getFeedback();
  }

  getFeedback = () => {
    // Get our employees from the server
    axios.get('/feedback')
      .then( (response) => {
        //Do something with stuff
        this.props.dispatch( {type: 'GET_FEEDBACK', payload: response.data} );
      })
      .catch( (error) => {
        console.log('Bad stuff happened! Oh no!', error);
      })
  }  

  render() {
    return (
      <div>
        <section>
          <h1>Welcome to the Admin Portal for Feedback</h1>
          <h3>Here is the feedback stored:</h3>
        </section>
        <div className="Card FeedbackTable">
          <AFeedbackList getFeedback={this.getFeedback} />
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Admin);
