import React from 'react'

const Hoc = (Wrap) => {
    // console.log(Wrap)
  return ()=>{
    return <Wrap name="Rahul" age={23} obj={{place:"Hyderabad"}} fun={()=>console.log("Hello")}/> 
  }
}

export default Hoc