import React from 'react'
import Video from "../components/Video"
import classes from "../style/Videos.module.css"

const Videos = () => {
  return (
    <div className={classes.videos}>
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
    </div>
  )
}

export default Videos