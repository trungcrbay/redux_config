import logo from './logo.svg';
// import './App.css';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions";
import axios from 'axios';
import store from './redux/store';
import { useEffect } from 'react';
import Home from './components/Home';


function App(props) {
  const dispatch = useDispatch();

  const newCount = useSelector(
    (state)=> {
      return state.counter.count; //count:counterReducer = initialState
      //counter:rootReducer 
  }
  );

  const newName = useSelector(
    (state)=> {
      return state.counter.name; //counter:counterReducer 
  }
  );
  //event handler 
  const handleIncrease = () => {
    // props.increaseCounter()
    dispatch(increaseCounter())
    //fire action : dispatch = fire 
    // store.dispatch({
    //   type:'tester tester',
    //   payload:{name:'TRUNG CR7'}
      
    // }) 
  }
  
  const handleDecrease = () => {
    dispatch(decreaseCounter())
  }

  return (
    <div className="App">
      {/* <div className='App-header'>
        <div>Count: {newCount}</div>
        <h1>Hello world with {newName}</h1>
        <button onClick={() => handleIncrease() }>Increase Count</button>

        <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
      </div> */}
      <Home />
    </div>
  );
}

//map state ( redux store ) + props react: ket noi state -> props cua redux , thay doi props redux ->props react thay doi
// const mapStateToProps = state => {
//   return {
//     count: state.counter.count, 
//     named:state.counter.name //counter: rootReducer , name:initial value , named: ten bien muon lay ra, dung props tham chieu
//   }
// }

// //map dispatch(redux) to props react 
// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()), //

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

//higher order component
//connect:cấy hai hàm vào bên trong component App -> lay du lieu thong qua bien props 
// -> tai su dung ( connect is important ! )
// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;