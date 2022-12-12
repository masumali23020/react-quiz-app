import React from 'react'
import imges from "../images/3.jpg"
import classes from "../style/Video.module.css"

const Video = ({title, noq, id}) => {
  return (
    <div>
         <
            ><div className={classes.video}>
              <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
              <p>{title}</p>
              <div className={classes.qmeta}>
                <p>{noq} Questions</p>
                <p>Total poient: {noq * 5 }</p>
              </div>
            </div>
          </>
    </div>
  )
}

export default Video