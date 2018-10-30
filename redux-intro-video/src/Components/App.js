import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  handleClick = () => {
    this.props.dispatch(
      { type: 'BUTTON_ONE'}
    )
  }
  render() {
    return (
        <div className="App">
          <button onClick={this.handleClick}>BUTTON 1</button>
        </div>
    );
  }
}

export default connect()(App);
