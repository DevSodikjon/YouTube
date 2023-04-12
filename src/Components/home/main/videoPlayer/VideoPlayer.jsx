import React from "react";
import Player from "./Player";
import NextVideos from "./NextVideos";
import { useParams } from "react-router";
import "../../generalScss/General.scss";
const VideoPlayer = () => {
  // const { videoId } = useParams();
  // const { videoId2 } = useParams();
  // console.log(id);
  return (
    <div className="pr-3 w-full">
      <div className=" flex justify-beween gap-10 max-sm:flex-col">
        <Player />
        <NextVideos />
      </div>
    </div>
  );
};

export default VideoPlayer;
