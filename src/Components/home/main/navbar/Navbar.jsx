import React from "react";
import { NavLink } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SlFolder } from "react-icons/sl";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { GiAlarmClock } from "react-icons/gi";
import { CiStar } from "react-icons/ci";
import { HiOutlineMusicNote } from "react-icons/hi";
import { GrGamepad } from "react-icons/gr";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import me from "../../../../img/me.jpg";
import Videos from "../videos/Videos";
import "./Navbar.scss";

const Navbar = ({ active }) => {
  return (
    <>
      {active && (
        <div className="navbar pt-11 mx-1 w-56 bg-white">
          <div className="navbar_items">
            <ul className=" mb-11">
              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex gap-3">
                  <div className="icon">
                    <MdHomeFilled className=" text-2xl" />
                  </div>
                  <p className=" text-lg">Home</p>
                </NavLink>
              </li>
              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex gap-3">
                  <div className="icon">
                    <AiOutlineFire className=" text-2xl" />
                  </div>
                  <p className=" text-lg text">Trending</p>
                </NavLink>
              </li>
              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex gap-3">
                  <div className="icon">
                    <MdOutlineSubscriptions className=" text-2xl" />
                  </div>
                  <p className=" text-lg text">Subscriptions</p>
                </NavLink>
              </li>
            </ul>

            <ul className=" mb-11">
              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex gap-3">
                  <div className="icon">
                    <SlFolder className=" text-2xl" />
                  </div>
                  <p className=" text-lg text">Library</p>
                </NavLink>
              </li>

              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex gap-3">
                  <div className="icon">
                    <MdOutlineHistoryEdu className=" text-2xl" />
                  </div>
                  <p className=" text-lg text">History</p>
                </NavLink>
              </li>

              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex gap-3">
                  <div className="icon">
                    <GiAlarmClock className=" text-2xl" />
                  </div>
                  <p className=" text-lg text">Watch later</p>
                </NavLink>
              </li>

              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex gap-3">
                  <div className="icon">
                    <CiStar className=" text-2xl" />
                  </div>
                  <p className=" text-lg text">Favourites</p>
                </NavLink>
              </li>

              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex gap-3">
                  <div className="icon">
                    <AiOutlineHeart className=" text-2xl" />
                  </div>
                  <p className=" text-lg text">Liked videos</p>
                </NavLink>
              </li>

              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex gap-3">
                  <div className="icon">
                    <HiOutlineMusicNote className=" text-2xl" />
                  </div>
                  <p className=" text-lg text">music</p>
                </NavLink>
              </li>

              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex gap-3">
                  <div className="icon">
                    <GrGamepad className=" text-2xl" />
                  </div>
                  <p className=" text-lg text">Game</p>
                </NavLink>
              </li>

              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex gap-3">
                  <div className="icon">
                    <MdOutlineKeyboardArrowDown className=" text-2xl" />
                  </div>
                  <p className=" text-lg text">Show more</p>
                </NavLink>
              </li>
            </ul>

            <div className="subscription mt-4">
              <div className="title  mb-8">
                <h2 className=" ml-4 text-xl font-semibold">Subscriptions</h2>
              </div>
              <ul className=" mb-11">
                <li className=" mb-6 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                  <NavLink className="flex gap-3 ">
                    <div className="img w-7">
                      <img
                        src={me}
                        className=" rounded-full"
                        alt="profil_photo"
                      />
                    </div>
                    <p className=" text-lg text">Gussie Singleton</p>
                  </NavLink>
                </li>
                <li className=" mb-6 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                  <NavLink className="flex gap-3 ">
                    <div className="img w-7">
                      <img
                        src={me}
                        className=" rounded-full"
                        alt="profil_photo"
                      />
                    </div>
                    <p className=" text-lg text">Gussie Singleton</p>
                  </NavLink>
                </li>
                <li className=" mb-6 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                  <NavLink className="flex gap-3 ">
                    <div className="img w-7">
                      <img
                        src={me}
                        className=" rounded-full"
                        alt="profil_photo"
                      />
                    </div>
                    <p className=" text-lg text">Gussie Singleton</p>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {!active && (
        <div className="modal_icons navbar pt-11 max-sm:hidden">
          <div className="modal_icons_items">
            <ul className=" mb-11">
              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex flex-col items-center">
                  <div className="icon">
                    <MdHomeFilled className=" text-3xl" />
                  </div>
                  <p className=" text-xs">Home</p>
                </NavLink>
              </li>
              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex flex-col items-center">
                  <div className="icon">
                    <AiOutlineFire className=" text-3xl" />
                  </div>
                  <p className=" text-xs">Trending</p>
                </NavLink>
              </li>
              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex flex-col items-center">
                  <div className="icon">
                    <MdOutlineSubscriptions className=" text-3xl" />
                  </div>
                  <p className=" text-xs">Subscriptions</p>
                </NavLink>
              </li>
              <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                <NavLink className="flex flex-col items-center">
                  <div className="icon">
                    <SlFolder className=" text-3xl" />
                  </div>
                  <p className=" text-xs">Library</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* <Videos /> */}
    </>
  );
};

export default Navbar;
