import React from 'react'

const CheckBox = ({className,id,text,}) => {
  return (
    <>
         <label className={className} > <input type="checkbox"  />
          <span> {text}</span> </label>
    </>
  )
}

export default CheckBox