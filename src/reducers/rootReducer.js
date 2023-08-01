
import { combineReducers } from 'redux';
import userReducer from './useReducer';


import counterReducer from './counterReducer';


const rootReducer = combineReducers({

    counter: counterReducer,
    user:userReducer

});

export default rootReducer;