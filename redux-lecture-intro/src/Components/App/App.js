import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  handleClick = () => {
    console.log('button one was clicked');
    this.props.dispatch( { type: 'BUTTON_ONE'} );
  }

  handleClick2 = () => {
    console.log('button two was clicked');
    this.props.dispatch( { type: 'BUTTON_TWO'} );
  }
  
  render() {
    console.log('Rendering App');
    return (
        <div className="App">
          <h1>Redux Intro</h1>
          <button onClick={this.handleClick}>BUTTON 1</button>
          <button onClick={this.handleClick2}>BUTTON 2</button>
          <pre>
            Junky State:
            {JSON.stringify( this.props.reduxState )}
          </pre>
        </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({ 
  reduxState 
});

export default connect(mapReduxStateToProps)(App);
