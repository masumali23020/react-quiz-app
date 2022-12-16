import React from 'react'

import classes from "../style/Illustration.module.css"
const Illustration = ({children}) => {
  return (
    
         <div className={classes.illustration}>
           
            {children}
          </div>
    
  )
}

export default Illustration