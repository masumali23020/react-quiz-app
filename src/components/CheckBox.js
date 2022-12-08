import React from 'react'

const CheckBox = ({text}) => {
  return (
    <>
         <label> <input type="checkbox" />
          <span> {text}</span> </label>
    </>
  )
}

export default CheckBox