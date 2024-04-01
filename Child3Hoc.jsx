import React from 'react'
import Hoc from './Hoc'

const Child3Hoc = ({name,age,obj:{place},fun}) => {
    // console.log(props)
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{place}</h1>
        <button onClick={fun}>Click</button>
    </div>
  )
}

export default Hoc(Child3Hoc)