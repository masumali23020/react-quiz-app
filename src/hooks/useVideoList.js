
import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database"
import { useEffect, useState } from 'react'

const useVideoList = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [videos, setVideos] = useState([])

    useEffect(()=> {

        async function fetchVideos(){
        //  datbase related woeks
        const db = getDatabase();
        const videosRef = ref(db, "videos");
        const videoQuery = query(
            
        videosRef,
        orderByKey(),
        startAt(" " + page ),
        limitToFirst(8)
        );
        try {
            setError(false);
            setLoading(true);
            // request firebase database 
            const snapshot = await get(videoQuery)
            setLoading(false)
            if(snapshot.exists()){
                setVideos((prevVideos) => {
                    return [...prevVideos, ...Object.values(snapshot.val())]
                })


            }else{

            }


            
        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(true)
            
        }

        
       }
       fetchVideos()
    },[])

  return {
    loading,
    error,
    videos
  }
}

export default useVideoList