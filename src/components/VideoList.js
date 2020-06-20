import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
 //videos is a array 
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      /> /*video(item of videoarray) is passed as props*/
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
