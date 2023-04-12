import { React, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useFatch from "../useFatch/UseFatch";
import UseFetchRec from "../useFetchRec/UseFetchRec";
import me from "../../../../img/me.jpg";
import user from "../../../../img/user.png";
import { Link } from "react-router-dom";
import BigCard from "./BigCard";
import dataVideos from "./data";
import Card from "./Card";
import "../videos/Videos.scss";
import "swiper/css";
import UseFetchAll from "../useFatchAll/UseFetchAll";

const Videos = () => {
  const [maxWidth, setMaxWidth] = useState(400);

  useEffect(() => {
    setMaxWidth(window.innerWidth);
  }, [window.innerWidth]);

  const { data, loading, error } = useFatch(
    "https://youtube-v31.p.rapidapi.com/playlistItems"
  );
  console.log(data);

  const { dataRec, loadingRec, errorRec } = UseFetchRec(
    "https://youtube-v31.p.rapidapi.com/search"
  );

  const { dataAll, loadingAll, errorAll } = UseFetchAll(
    "https://youtube-v31.p.rapidapi.com/captions"
  );
  console.log(dataAll);

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
              {data.map((data, id) => (
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
                  {dataRec.map((data, id) => (
                    <SwiperSlide key={id}>
                      <BigCard
                        key={data.id}
                        id={data.id}
                        videoId={data.id.videoId}
                        img={data.snippet.thumbnails.high.url}
                        title={data.snippet.title}
                        author={data.snippet.videoOwnerChannelTitle}
                        published={data.snippet.publishedAt.slice(0, 7)}
                        // key={data.id}
                        // id={data.id}
                        // img={
                        //   data.snippet.topLevelComment.snippet
                        //     .authorProfileImageUrl
                        // }
                        // title={data.snippet.topLevelComment.snippet.textDisplay}
                        // videoId={data.snippet.videoId}
                        // author={
                        //   data.snippet.topLevelComment.snippet.authorDisplayName
                        // }
                        // published={data.snippet.topLevelComment.snippet.publishedAt.slice(
                        //   0,
                        //   7
                        // )}
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
              {dataAll.map((data, id) => (
                <SwiperSlide key={id}>
                  <Card
                    key={data.id}
                    id={data.id}
                    img={user}
                    videoId={data.snippet.videoId}
                    title={data.snippet.name}
                    author={data.snippet.audioTrackType}
                    published={data.snippet.lastUpdated.slice(0, 7)}
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
