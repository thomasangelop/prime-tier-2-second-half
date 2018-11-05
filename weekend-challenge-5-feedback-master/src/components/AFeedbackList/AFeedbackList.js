import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

class AFeedbackList extends Component {

//   deleteEmployee = (id) => {
//     // call axios
//     axios({
//       method: 'DELETE',
//       url: `/employees/${id}`
//     })
//     .then( (response) => {
//       this.props.getEmployees();
//     })
//     .catch( (error) => {
//       alert('Bad stuff happened! Oh no!');
//     })
//   }

  render() {
    return (
      <ul>
        {this.props.reduxState.getFeedbackReducer.map(feedback => (
          <li key={feedback.id}>
            {`${feedback.feeling}
            ${feedback.understanding}
            is the ${feedback.support}
            and makes ${feedback.comments}`}
            {/* <button onClick={() => { 
                this.deleteEmployee(employee.id) 
              } 
            }>
              Delete
            </button> */}
          </li>
        ))}
      </ul>
    );
  }

}

export default connect(mapReduxStateToProps)(AFeedbackList);
