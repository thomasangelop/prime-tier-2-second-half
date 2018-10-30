import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({ 
    reduxState 
  });

class Button extends Component {
  render() {
    console.log('Rendering App');
    return (
        <div>
          <p>Button 1 was clicked {this.props.reduxState.buttonOneReducer.clickCount} times.</p>
          <p>Button 2 was clicked {this.props.reduxState.buttonTwoReducer.clickCountB} times.</p>
        </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Button);
