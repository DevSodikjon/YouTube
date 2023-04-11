import React from "react";
import "../videoPlayer/Card.scss";
import { Link } from "react-router-dom";
const Cardsecond = (props) => {
  const { id, img, videoId, title, author, published } = props;

  return (
    <>
      <div className="Cardsecond my-6 w-56 mr-4 max-sm:flex items-center">
        <div className="Cardsecond_items">
          <div className="image">
            <Link
              to={`/youtube/${videoId}`}
              onClick={() => console.log("Link")}
            >
              <button className="">
                <img
                  src={img}
                  className=" rounded-2xl h-full"
                  alt=""
                  onClick={() => console.log("Img")}
                />
              </button>
            </Link>
          </div>
          <div className="title mt-2">
            <h3 className=" text-sm font-bold">{title}</h3>

            <div className="watched mt-3 flex items-center justify-between">
              <p className=" text-xs font-normal">
                <span>0k</span>
              </p>
              <p className="text-xs font-normal">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardsecond;
