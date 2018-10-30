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

  addPerson = (name) => {
    return (event ) => {
    console.log('adding a person...');
    this.props.dispatch ({ 
      type: 'ADD_PERSON', 
      payload: {
      name: name, 
      color: 'Blood Red'}})
    }
  }
  
  render() {
    console.log('Rendering App');
    return (
        <div className="App">
          <h1>Redux Intro</h1>
          <button onClick={this.handleClick}>BUTTON 1</button>
          <button onClick={this.handleClick2}>BUTTON 2</button>
          <button onClick={this.addPerson('Christy')}>Add Christy</button>
          <button onClick={this.addPerson('Mary')}>Add Mary</button>
          <Button />
          {/* // <pre>
          //   Junky State:
          //   {JSON.stringify( this.props.reduxState )}
          // </pre> */}
          {/* <p>Person is {this.props.reduxState.personReducer.name}</p> */}
          {/* <pre> The people are: {JSON.stringify(this.props.reduxState.personReducer)}</pre> */}
          {this.props.reduxState.personReducer.map( (person, index) => 
          <p key={index}>{person.name} like {person.color}</p>)
          }
        </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
