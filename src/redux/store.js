import { createStore , applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk"; 

import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'; //logger middleware
//includes:reducers , middleware...
const store = createStore( //goi store
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleWare))
    );

export default store;