import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

class AFeedbackList extends Component {

  deleteFeedback = (id) => {
    console.log('delete button was pushed');
    axios({
      method: 'DELETE',
      url: `/feedback/${id}`
    })
    .then( (response) => {
      this.props.getFeedback();
    })
    .catch( (error) => {
      alert('Bad stuff happened! Oh no!');
    })
  }

  render() {
    return (
      <div>
          <section>
            <tr>
                <th>ID</th><th>Feeling</th><th>Understanding</th><th>Support</th>
                    <th>Comments</th><th>Delete</th>
            </tr>
            {this.props.reduxState.getFeedbackReducer.map(feedback => (
            <tr>
                    <td key={feedback.id}></td>
                    <td>{`${feedback.feeling}`}</td>
                    <td>{`${feedback.understanding}`}</td>
                    <td>{`${feedback.support}`}</td>
                    <td>{`${feedback.comments}`}</td>
                    <td>
                        <button onClick={() => { 
                        this.deleteFeedback(feedback.id)}}>Delete</button>
                    </td>
            </tr>
            ))}
          </section>
      </div>
    );
  }

}

export default connect(mapReduxStateToProps)(AFeedbackList);
