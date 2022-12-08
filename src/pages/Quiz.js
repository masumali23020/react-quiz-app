import React from 'react'
import Answeres from '../components/Answeres'
import Minplayer from '../components/Minplayer'
import ProgressBar from '../components/ProgressBar'

const Quiz = () => {
  return (
    <>
     <h1>Pick three of your favorite Star Wars Flims</h1>
        <h4>Question can have multiple answers</h4>
        <Answeres />
        <ProgressBar />
        <Minplayer />
        

    </>
  )
}

export default Quiz