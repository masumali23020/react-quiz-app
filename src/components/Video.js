import React from 'react'
import { Link } from 'react-router-dom'
import imges from "../images/3.jpg"
import classes from "../style/Video.module.css"

const Video = () => {
  return (
    <div>
         <Link to="/quiz"
            ><div className={classes.video}>
              <img src={imges} alt="banner" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className={classes.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
          </Link>
    </div>
  )
}

export default Video