import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'
import Video from "../components/Video"
import useVideoList from '../hooks/useVideoList'
const Videos = () => {
  
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 8)}
        >
          {videos.map((video,indx) =>
            video.noq > 0 ? (
              <Link to={`/quiz/${video.youtubeID}`}
              
              
              key={indx}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
                key={video.youtubeID}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default Videos