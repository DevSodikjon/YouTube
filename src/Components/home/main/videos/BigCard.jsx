import React from "react";
import { Link } from "react-router-dom";
const BigCard = (props) => {
  const { id, img, videoId, title, author, published } = props;
  return (
    <>
      <div className="card h-68 border w-94">
        <div className="card_items">
          <div className="image">
            <Link to={`/youtube/${videoId}`}>
              <button className="">
                <img src={img} className="rounded-2xl" alt="" />
              </button>
            </Link>
          </div>
          <div className="title">
            <h3 className=" text-lg mb-3">{title}</h3>

            <div className="watched flex items-center justify-between">
              <p className=" text-sm flex gap-1">
                <span>0k</span>· <span>{published}</span>
              </p>
              <p className=" text-xs">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCard;
