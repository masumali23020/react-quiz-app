import React from 'react'
import { Link } from 'react-router-dom'
import Video from "../components/Video"
import useVideoList from '../hooks/useVideoList'
import classes from "../style/Videos.module.css"

const Videos = () => {
  const {videos, loading, error} = useVideoList()
  return (
    <div className={classes.videos}>
     {videos.length > 0 &&
     videos.map(video => 
      ( <Link to="/quiz"key={video.youtubeID
      } >
      <Video title={video.title} id={video.youtubeID } noq={video.noq }  />
    </Link>)
     )}
     {!loading && videos.length === 0 && (
      <div>No data found!</div>
     )}
    {error && <div>There was an Error</div>}
    {loading && <div>Loading ....</div> }
        
    </div>
  )
}

export default Videos