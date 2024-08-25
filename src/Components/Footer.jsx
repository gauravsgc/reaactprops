import React, { useState } from 'react'

export default function Footer() {
    // const [count,setCount]=useState(0);
    // const [address,setAddress]=useState('hisar');

const [state,setState]=useState({count:0,address:'hisar'})
console.log(state);
const {count,address}=state;

    const handleIncrement=()=>{
        // setCount(prevcount=>prevcount+1);
        // setAddress('rohtak');
        // setCount(count+1);
        //mutate:change karna
        setState(prevState=>{
return{
    ...prevState,//previous value hold
    count:prevState.count+1,
    address:'rohtak'
}
        })
       
    }
    // const handle2Increment=()=>{
    //     handleIncrement();//1
    //     handleIncrement();//2
    // }
  return (
    <div>
      the value of counter is:-
      {count}
      <br />
      your addres is :
      {address}
      <button  onClick={handleIncrement}>increment</button>
      {/* <button  onClick={handle2Increment}>2increment</button> */}
    </div>
  )
}
