import React, { useState } from 'react'

export default function Middle({data,icon,children}) {//props
const [info,setinfo]=useState(['mango','banana']);
const addData=()=>{
  setinfo([...info,'apple']);
}
  // console.log(props);
  //object
  // const {data}=props;
  //object distruct
  const handleClick=(info)=>{
    alert(`clicked me ${info}`)
  }
  return (
    <>
     <p>{data}</p>
    <p>{info}</p>
     <button onClick={addData}>click</button>
      <img src={icon} alt="" width={100} height={100} />
      {/* <button onClick={()=>handleClick(children)}>{children}</button> */}
    </>
  )
}
