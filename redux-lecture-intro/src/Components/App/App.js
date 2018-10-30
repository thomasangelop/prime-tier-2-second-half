import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  handleClick = () => {
    console.log('button one was clicked');
    this.props.dispatch( { type: 'BUTTON_ONE'} );
  }
  
  render() {
    return (
        <div className="App">
          <h1>Redux Intro</h1>
          <button onClick={this.handleClick}>BUTTON 1</button>
        </div>
    );
  }
}

export default connect()(App);
