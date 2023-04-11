import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const { id, videoId, img, title, author, published } = props;

  return (
    <>
      <div className="card h-64 sm: w-full " key={id}>
        <div className="card_items">
          <div className="image">
            <Link to={`/youtube/${videoId}`} onClick={videoId}>
              <button className="">
                <img src={img} className=" rounded-2xl" alt="" />
              </button>
            </Link>
          </div>
          <div className="title">
            <h3 className="text-sm mb-2">{title}</h3>

            <div className="watched flex items-center justify-between">
              <p className=" text-xs">
                <span>0k</span>· <span>{published}</span>
              </p>
              <p className="text-xs">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
