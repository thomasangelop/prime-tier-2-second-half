import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state={ feeling: '', understanding: '', support: '',
                     comments:'',}, action) => {
    console.log('in feedback reducer');
    switch (action.type) {
        case 'ENTERED_FEELING_INFO':
            console.log('in ENTERED_FEELING_INFO', action.payload.feeling);
            let stateFeeling = state.feeling;
            console.log('state feeling:',stateFeeling);
            state = {...state, feeling: action.payload.feeling };
            console.log('State is now', state);
            return state; 
        case 'ENTERED_UNDERSTANDING_INFO':
            console.log('in ENTERED_UNDERSTANDING_INFO', action.payload.understanding);
            let stateUnderstanding = state.understanding;
            console.log('state understanding:',stateUnderstanding);
            state = {...state, understanding: action.payload.understanding };
            console.log('State is now', state);
            return state;    
        case 'ENTERED_SUPPORT_INFO':
            console.log('in ENTERED_SUPPORT_INFO', action.payload.support);
            let stateSupport = state.support;
            console.log('state support:',stateSupport);
            state = {...state, support: action.payload.support };
            console.log('State is now', state);
            return state;
        case 'ENTERED_COMMENTS_INFO':
            console.log('in ENTERED_COMMENTS_INFO', action.payload.comments);
            let stateComments = state.comments;
            console.log('state comments:',stateComments);
            state = {...state, comments: action.payload.comments };
            console.log('State is now', state);
            return state;
        default: 
            return state;
    }
}

const getFeedbackReducer = (state=[], action) => {
    console.log('In getFeedback reducer...');
    if ( action.type === 'GET_FEEDBACK' ) {
      state = action.payload;
    } 
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer, getFeedbackReducer
    }),
    applyMiddleware(logger)
  )

ReactDOM.render(<Provider store={ storeInstance }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
