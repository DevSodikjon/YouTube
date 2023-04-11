import { React, useState, useEffect } from "react";
import me from "../../../../img/me.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "../videos/Videos.scss";
import "swiper/css";
import Card from "./Card";
import { Link } from "react-router-dom";
import dataVideos from "./data";
import BigCard from "./BigCard";
import useFatch from "../useFatch/UseFatch";

const Videos = () => {
  const [maxWidth, setMaxWidth] = useState(400);

  useEffect(() => {
    setMaxWidth(window.innerWidth);
  }, [window.innerWidth]);

  // const { data, loading, error } = useFatch(
  //   "https://youtube-v31.p.rapidapi.com/playlistItems"
  // );
  // console.log(data);
  // useEffect(() => {
  //   useFatch();
  // }, []);

  return (
    <>
      <div className="videos ">
        <div className="videos_items pt-11 pl-10">
          <div className="profile mb-7 flex items-center justify-between">
            <div className="user flex items-center gap-5">
              <div className="profile_photo w-12">
                <img src={me} alt="profile_photo" className="rounded-full" />
              </div>

              <div className="name">
                <h2 className="font-bold text-2xl">Dollie Blair</h2>
              </div>
            </div>
          </div>

          <div className="card_swipper overflow-x-hidden">
            <Swiper
              spaceBetween={10}
              slidesPerView={maxWidth < 500 ? 1 : 5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {dataVideos.map((data, id) => (
                <SwiperSlide key={id}>
                  <Card
                    key={data.id}
                    id={data.id}
                    videoId={data.snippet.resourceId.videoId}
                    img={data.snippet.thumbnails.high.url}
                    title={data.snippet.title}
                    author={data.snippet.videoOwnerChannelTitle}
                    published={data.snippet.publishedAt.slice(0, 7)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="recommend_video mt-9 w-full card_swipper">
            <div className="title">
              <h3 className=" text-2xl font-bold mt-4">Recommended</h3>
            </div>
            <div className="recommend_cardGroup mt-9">
              <div className="card_swipper overflow-x-hidden">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={maxWidth < 500 ? 1 : 3}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {dataVideos.map((data, id) => (
                    <SwiperSlide key={id}>
                      <BigCard
                        key={data.id}
                        id={data.id}
                        img={data.snippet.thumbnails.high.url}
                        title={data.snippet.title}
                        videoId={data.snippet.resourceId.videoId}
                        author={data.snippet.videoOwnerChannelTitle}
                        published={data.snippet.publishedAt.slice(0, 7)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="card_swipper mt-14 overflow-x-hidden">
            <div className="title mb-9">
              <h3 className=" text-2xl font-bold mt-4">Food & Drink</h3>
            </div>
            <Swiper
              spaceBetween={50}
              slidesPerView={maxWidth < 500 ? 1 : 5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {dataVideos.map((data, id) => (
                <SwiperSlide key={id}>
                  <Card
                    key={data.id}
                    id={data.id}
                    img={data.snippet.thumbnails.high.url}
                    title={data.snippet.title}
                    author={data.snippet.videoOwnerChannelTitle}
                    published={data.snippet.publishedAt.slice(0, 7)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
