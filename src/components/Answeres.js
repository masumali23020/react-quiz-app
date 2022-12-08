import React from 'react'
import classes from "../style/Answers.module.css"
import CheckBox from './CheckBox'

const Answeres = () => {
  return (
    <>
   <div className={classes.answers}>
    <CheckBox className={classes.answer} text="text  1 check" />
   </div>

    </>
  )
}

export default Answeres