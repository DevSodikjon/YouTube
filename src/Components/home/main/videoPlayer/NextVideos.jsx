import React from "react";
import Cardsecond from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useFatch from "../useFatch/UseFatch";

import dataVideos from "../videos/data";
const NextVideos = () => {
  // const { data, loading, error } = useFatch(
  //   "https://youtube-v31.p.rapidapi.com/playlistItems"
  // );
  // console.log(dataVideos);
  return (
    <div>
      <div className=" mt-8 max-sm:text-center">
        <div className="title">
          <h3 className=" text-4xl font-bold">Next</h3>
        </div>
        {dataVideos.map((data, id) => (
          <Cardsecond
            key={id}
            id={data.id}
            img={data.snippet.thumbnails.high.url}
            title={data.snippet.title}
            videoId={data.snippet.resourceId.videoId}
            author={data.snippet.videoOwnerChannelTitle}
            published={data.snippet.publishedAt.slice(0, 7)}
          />
        ))}
      </div>
    </div>
  );
};

export default NextVideos;
