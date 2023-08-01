import { INCREMENT, DECREMENT } from '../action/types';


const INITIAL_STATE = {  // gia tr khoi tao = 0

  count: 0,
  name:'TRUNG CR7'
};
//dispatch:event handler
const counterReducer = (state = INITIAL_STATE, action) => { //state global 

  switch (action.type) {

    case INCREMENT:
      console.log('I am running INCREMENT'); //fire actions INCREMENT test before 
      return {

        ...state, count: state.count + 1, //action = INCREMENT => tang state +1 

      };

    case DECREMENT:

      return {
        ...state, count: state.count - 1, //action = DECREMENT => tang state -1 

      };

    default: return state;

  }

};

export default counterReducer;