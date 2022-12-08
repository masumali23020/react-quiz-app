import React from 'react'
import classes from "../style/TextInput.module.css"

const TextInput = ({icon, ...rest}) => {
  return (
    <div>
       <div className={classes.textInput}>
              <input  {...rest} />
              <span class="material-icons-outlined"> {icon} </span>
            </div>
    </div>
  )
}

export default TextInput