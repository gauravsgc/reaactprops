import React from 'react'

export default function Middle({data,icon,children}) {//props
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
     
      <img src={icon} alt="" width={100} height={100} />
      <button onClick={()=>handleClick(children)}>{children}</button>
    </>
  )
}
