import React from "react";

const VideoDetail = ({ video }) => {
  // if there is no video returned to display say...loading message
  if (!video) {
    return <div>Loading...</div>;
  }

  // the base URL of the YouTube video to display in the iframe element
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
         <iframe
          data-source="youtube"
          src={videoSrc}
          title={video.snippet.title}
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
