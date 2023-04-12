import React from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { IoMdShareAlt } from "react-icons/io";
import { FiMoreHorizontal } from "react-icons/fi";
import user from "../../../../img/user.png";
import { useParams, Link } from "react-router-dom";
import "../videoPlayer/Player.scss";
import useFatch from "../useFatch/UseFatch";
import useFetchComm from "../useFetchComm/useFetchComm";
import { useEffect } from "react";
import dataVideos from "../videos/data";

const Player = () => {
  const { id } = useParams();

  console.log(id);
  const { dataComments } = useFetchComm(
    "https://youtube-v31.p.rapidapi.com/commentThreads"
  );

  let title;
  let desc;
  let author;
  let date;
  console.log(dataComments);
  // dataComments.map((el) => {
  //   // if (el.snippet.videoId === id) {
  //   title = el.snippet.topLevelComment.snippet.authorDisplayName;
  //   // } else {
  //   // title = "not found";
  //   // }
  // });
  return (
    <>
      <div className="player w-5/6 ml-2 max-sm:w-full">
        <div className="player_items mt-8">
          <div className="player_media rounded-xl">
            <iframe
              width="100%"
              height="400"
              className="rounded-xl"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <div className="title mt-5 max-sm:m-2">
            <h1 className=" text-3xl font-bold"></h1>
          </div>

          <div className="function_parts flex items-center justify-between mt-1 max-sm:flex-col">
            <p>0 k views</p>

            <div className="btns flex gap-3 items-center">
              <button className="flex items-center gap-2 px-5 py-3 bg-zinc-200 rounded-full hover:bg-zinc-400 ... max-sm:px-2 py-2">
                <div className="icons">
                  <SlLike className=" text-sm text-gray-600 max-sm: text-xs" />
                </div>
                <div className="coutn text-base font-normal">
                  <span>123</span>
                  <span>k</span>
                </div>
              </button>
              <button className="flex items-center gap-2 px-5 py-3 bg-zinc-200 rounded-full hover:bg-zinc-400 ... max-sm:px-2 py-2">
                <div className="icons">
                  <SlDislike className=" text-sm text-gray-600" />
                </div>
                <div className="coutn text-base font-normal">
                  <span>123</span>
                  <span>k</span>
                </div>
              </button>
              <button className="flex items-center gap-2 px-5 py-3 bg-zinc-200 rounded-full hover:bg-zinc-400 ... max-sm:px-2 py-2">
                <div className="icons">
                  <IoMdShareAlt className=" text-xl text-gray-600" />
                </div>
                <div className="coutn text-base font-normal">
                  <span>123</span>
                  <span>k</span>
                </div>
              </button>
              <div className="icon_more hover:bg-zinc-400 ..., rounded-full p-1 ">
                <FiMoreHorizontal className="text-3xl cursor-pointer " />
              </div>
            </div>
          </div>

          <hr className=" mt-4" />

          {dataComments.map((elComment) => (
            <div className="comments mt-10 mb-10 flex gap-3">
              <div className="user_avatar w-40 rounded-full">
                <img
                  className="rounded-full"
                  src={
                    elComment.snippet.topLevelComment.snippet
                      .authorProfileImageUrl
                  }
                  alt="user avatar"
                />
              </div>
              <div className="user_info">
                <div className="title">
                  <h3>
                    {
                      elComment.snippet.topLevelComment.snippet
                        .authorDisplayName
                    }
                  </h3>
                  <div className="date">
                    {elComment.snippet.topLevelComment.snippet.publishedAt}
                  </div>
                </div>
                <div className="comment mt-4">{/* <p>{desc}</p> */}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Player;
