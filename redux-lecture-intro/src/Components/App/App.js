import React, { Component } from 'react';
import './App.css';
import Button from '../Button/Button';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({ 
  reduxState 
});

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
          <Button />
          {/* // <pre>
          //   Junky State:
          //   {JSON.stringify( this.props.reduxState )}
          // </pre> */}
        </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
