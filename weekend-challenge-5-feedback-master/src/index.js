import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state={ feeling: '', comprehension: '', support: '',
                     comments: '' }, action) => {
    console.log('in feedback reducer');
    switch (action.type) {
        case 'ENTERED_FEELING_INFO':
            console.log('in ENTERED_FEELING_INFO', action.payload.feeling);
            let stateFeeling = state.feeling;
            console.log('state feeling:',stateFeeling);
            state = {...state, feeling: action.payload.feeling };
            console.log('State is now', state);
            return state; 
        case 'ENTERED_COMPREHENSION_INFO':
            console.log('in ENTERED_COMPREHENSION_INFO', action.payload.comprehension);
            let stateComprehension = state.comprehension;
            console.log('state feeling:',stateComprehension);
            state = {...state, comprehension: action.payload.comprehension };
            console.log('State is now', state);
            return state;    
        case 'ENTERED_SUPPORT_INFO':
            console.log('in ENTERED_SUPPORT_INFO', action.payload.support);
            let stateSupport = state.support;
            console.log('state feeling:',stateSupport);
            state = {...state, support: action.payload.support };
            console.log('State is now', state);
            return state;
        // 
        // case 'ENTER_CUSTOMER_INFO':
        //     console.log('in ENTER_CUSTOMER_INFO');
        //     state = {
        //         ...state, 
        //         customer_name: action.payload.customerName,
        //         street_address: action.payload.streetAddress,
        //         city: action.payload.city,
        //         zip: action.payload.zip,
        //         type: action.payload.status,
        //     };
        //     console.log('State is now', state);
        //     return state; 

        default: 
            return state;
        
    }
    
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
  )

ReactDOM.render(<Provider store={ storeInstance }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
