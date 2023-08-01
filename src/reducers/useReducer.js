import {
    INCREMENT, DECREMENT, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR
    , CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_ERROR
} from '../action/types';


const INITIAL_STATE = {  // gia tr khoi tao = 0
    listUsers: [],
    isLoading: false,
    isError: false,
    isCreating:false,
};
//dispatch:event handler
const userReducer = (state = INITIAL_STATE, action) => { //state global 

    switch (action.type) {

        case FETCH_USER_REQUEST:
            console.log("FETCH_USER_REQUEST: ", action);
            return {
                ...state,
                isLoading: true,
                isError: false
            };

        case FETCH_USER_SUCCESS:
            console.log("FETCH_USER_SUCCESS: ", action);
            return {
                ...state, listUsers: action.dataUsers, //(fire => truyen kem theo dataUsers o file actions)
                isLoading: false,
                isError: false

            };

        case FETCH_USER_ERROR:
            console.log("FETCH_USER_ERROR: ", action);
            return {
                ...state, count: state.count - 1, //action = DECREMENT => tang state -1 
                isLoading: false,
                isError: true
            };

        case CREATE_USER_REQUEST:
            return{
                ...state,
                isCreating:true
            }
        case CREATE_USER_SUCCESS:
            return{
                ...state,
                isCreating:false
            }
        case CREATE_USER_ERROR:
            return{
                ...state,
                isCreating:false
            }
        default: return state;

    }

};

export default userReducer;