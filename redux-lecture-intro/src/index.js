import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducer - It's a function that's going to affect your redux state
// your reducers should take in state & return the updated state
// they also should take in an action. 
// we can choose what to do for specific action types 
const buttonOneReducer = (state={clickCount: 0 }, action) => {
    if(action.type === 'BUTTON_ONE'){
        console.log('button 1 clicked - reducer');
        //Add 1 to the state's clickCount
        state = {clickCount: state.clickCount+=1}; 
    } else {
        console.log('Hello! I do not care about this action.');
    }
    console.log('state is now', state);

    return state;
}

const buttonTwoReducer = (state={clickCountB: 0 }, action) => {
    if(action.type === 'BUTTON_TWO'){
        console.log('button 2 clicked - reducer');
        //Add 1 to the state's clickCount
        state = {clickCountB: state.clickCountB+=1};  
    } else {
        console.log('Hello! I do not care about this action.');
    }
    console.log('state is now', state);

    return state;
}

// this creates the Redux store
// It's a big object that holds all our applicaiton's state
const storeInstance = createStore(
    combineReducers({
        buttonOneReducer, buttonTwoReducer,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
