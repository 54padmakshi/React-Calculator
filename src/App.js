import React, { useState, useReducer,createContext } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Notification from './components/Notification/Notification';
import { INITIAL_STORE,reducer } from './store';
import "./components/Button/Button.css"

export const StoreContext = createContext();

function App () {
 const [num1,setNum1]= useState();
 const [num2,setNum2]= useState();

 const [state, dispatch ] = useReducer(reducer,INITIAL_STORE);


 const handleChange = (event)=>{
    const { name , value } = event.target;    
    name === "num1" ? setNum1(value) : setNum2(value);
   }
 
 const handleOperation =(event)=>{
      const operation = event.target.name;
    
      if(num1 && num2 && !isNaN(num1) && !isNaN(num2)){
      /*  const intnum1 = parseInt(num1);
        const intnum2 = parseInt(num2);  */
        dispatch({type :operation , error :false , num1 : num1 , num2 : num2 })
      }
      else{

        if( !num1 )
        dispatch({type :operation , error :true,message :"Num1 cannot be empty", })
        else if (!num2 || isNaN(num2)) {
          if (typeof num2 === "string" && num2) {
            dispatch({type :operation , error :true,message :"Invalid Input Type", })
          }
          else {
            dispatch({type :operation , error :true,message :"Num2 cannot be empty" })
          }
        }
          
        else{
              dispatch({type :operation , error :true,message :"Invalid input types", })
        }

      }
 }
  return (
    <div className="App">
    <h1>
      React Calculator
    </h1>
    <StoreContext.Provider value={state}>
    <Input name='num1' value={num1} onChange={handleChange}  placeholder='Num1' />
    <Input name='num2' value={num2} onChange={handleChange}  placeholder='Num2' />
    <div className='btn'>
      <Button label="+" handleOperation = {handleOperation} />
      <Button label="-" handleOperation = {handleOperation} />
      <Button label="x" handleOperation = {handleOperation} />
      <Button label="/" handleOperation = {handleOperation} />
    </div>

     <h2> Result = {state.ans} </h2>
     
     {state.isActionTaken && <Notification  /> } 
     </StoreContext.Provider>
    </div>
  );
}

export default App;
