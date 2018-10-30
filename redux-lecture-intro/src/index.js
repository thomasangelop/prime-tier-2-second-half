import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// this creates the Redux store
// It's a big object that holds all our applicaiton's state
const storeInstance = createStore(

// Reducer - It's a function that's going to affect your redux state
// your reducers should take in state & return the updated state
// they also should take in an action. 
// we can choose what to do for specific action types     
    (state={}, action) => {
        if(action.type === 'BUTTON_ONE'){
            console.log('button 1 clicked - reducer');
        } else {
            console.log('Hello! I do not care about this action.');
        }
        return state;
    },
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
