import { INCREMENT, DECREMENT, FETCH_USER_ERROR, FETCH_USER_SUCCESS, FETCH_USER_REQUEST
  , CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_ERROR , DELETE_USER_SUCCESS
} from './types';
import axios from 'axios';

export const increaseCounter = () => {

  return {

    type: INCREMENT,
    payload: { like: 'Buy Milk', name: 'Trung Cr7' }
  };

};

export const decreaseCounter = () => {

  return {

    type: DECREMENT,

  };

};

//start - doing - finish => 3 states get api
export const fetchAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUsersRequest());
    try {
      const res = await axios.get("http://localhost:8081/users/all");
      const data = res && res.data ? res.data : [];
      dispatch(fetchUsersSuccess(data)); //thanh cong =>> fire fetchUsersSuccess
    } catch (error) {
      console.log(error);
      dispatch(fetchUsersError())
    }


  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    dataUsers:data //payload kem theo action ( data kem theo actions )
  }
}

export const fetchUsersError = () => {
  return {
    type: FETCH_USER_ERROR
  }
}

export const createUsersRequest = () => {
  return {
    type: CREATE_USER_REQUEST
  }
}

export const createUsersSuccess = (data) => {
  return {
    type: CREATE_USER_SUCCESS,
  
  }
}

export const createUsersError = () => {
  return {
    type: CREATE_USER_ERROR
  }
}

//create middleware
export const createNewUserRedux = (email, password, username) => { 
  return async(dispatch,getState) => {
    dispatch(createUsersRequest());
    try{
      //create user => using post method
      let res = await axios.post('http://localhost:8081/users/create', {email, password, username})
      if(res && res.data.errCode === 0){
        dispatch(createUsersSuccess());
        dispatch(fetchAllUsers());
      }
    }catch(error){
      console.log(error);
      dispatch(createUsersError());
    }
  }
}

export const deleteUserRedux = (id) => {
  return async (dispatch, getState) => {
    try{
      let res = await axios.post(`http://localhost:8081/users/delete/${id}`)
      if(res && res.data.errCode === 0){
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUsers());
      }
    }catch(error){
      console.log(error);
    }
  }
}

export const deleteUserSuccess = () => {
  return{
    type:DELETE_USER_SUCCESS
  }
}