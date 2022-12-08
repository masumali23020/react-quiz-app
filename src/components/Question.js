import React from 'react'
import Answeres from "../components/Answeres"
import classes from "../style/Question.module.css"

const Question = () => {
  return (
    
      <>
      <div className={classes.question}>
            <div className={classes.qtitle}>
              <span className="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Sumit?
            </div>
            <Answeres />

            </div>
            
      </>
    
  )
}

export default Question