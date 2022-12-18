import React, { useMemo } from 'react'
import useFetchApi from '../hooks/useFetchApi'
import successImage from "../images/success.png"
import classes from "../style/Summary.module.css"

const Summary = ({score,noq}) => {
<<<<<<< HEAD
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);

  const { loading, error, result } = useFetchApi(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : successImage;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className={classes.badge}>Loading your badge...</div>}

      {error && <div className={classes.badge}>An error occured!</div>}

      {!loading && !error && (
        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
=======
   
  return (
    <div className={classes.summary}>
          <div className={classes.point}>
          
            <p className={classes.score}>
              Your score is <br />
              {score} out of {noq * 5}
            </p>
          </div>
          

          <div className={classes.badge}>
            <img src={image} alt="Success" />
          </div>
     </div>
  )
>>>>>>> 078f80e869f1ce2ec474786138ff335c44a4a2a0
}

export default Summary