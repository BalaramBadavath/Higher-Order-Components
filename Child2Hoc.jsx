import React from 'react'
import Child3Hoc from './Child3Hoc'
import Hoc from './Hoc'

const Child2Hoc = (props) => {
    console.log(props)
  return (
    <div>
        <Child3Hoc/>
    </div>
  )
}

export default Hoc(Child2Hoc)