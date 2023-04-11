import { React, useState } from "react";
import "../generalScss/General.scss";
import "../header/Header.scss";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineSearch } from "react-icons/hi";
import { MdKeyboardVoice } from "react-icons/md";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi";
import logo from "../../../img/logo.svg";
import me from "../../../img/me.jpg";
import { Link } from "react-router-dom";
const Header = ({ handleModal }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <header>
        <div className="container max-sm:w-full">
          <div className="header_items py-1 pr-7 flex justify-between items-center">
            <div className="header_items_navLeft flex items-center gap-12">
              <div className="logo flex gap-7 items-center">
                <div className="header_items_navLeft_burger  hover:bg-zinc-300 ..., cursor-pointer rounded-full p-3 max-sm:hidden block">
                  <RxHamburgerMenu
                    onClick={handleModal}
                    className=" burgerIcons text-2xl"
                  />
                </div>

                <div className="header_items_navLeft_logos">
                  <Link to={`/`} className="flex items-center">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
              </div>

              <div className="input_search max-sm:hidden block">
                <form className="form flex items-center gap-2">
                  <div className="flex w-full text-lg items-center bg-slate-200 p-0 rounded-full ">
                    <input
                      className="text-base border border-gray-300 rounded-l-full py-2 pl-7"
                      type="text"
                      placeholder="Search"
                    />
                    <div className="icon py-3 px-4">
                      <HiOutlineSearch className=" " />
                    </div>
                  </div>

                  <div className="voice-icons rounded-full p-2 bg-zinc-100 hover:bg-zinc-300 ..., cursor-pointer">
                    <MdKeyboardVoice className=" text-2xl" />
                  </div>
                </form>
              </div>
            </div>

            <div className="header_items_navRight flex">
              <div className="icons flex items-center gap-10">
                <div className="camera_icon hover:bg-zinc-300 ..., cursor-pointer rounded-full p-2 max-sm:hidden block">
                  <MdOutlineVideoCameraBack className=" text-3xl text-stone-400" />
                </div>
                <div className="bell_icons hover:bg-zinc-300 ..., cursor-pointer rounded-full p-2 max-sm:hidden block">
                  <HiOutlineBell className=" text-3xl text-stone-400  " />
                </div>
                <div className="bell_icons hidden hover:bg-zinc-300 ..., cursor-pointer rounded-full p-2 max-sm:block ">
                  <HiOutlineSearch className=" text-3xl text-stone-400  " />
                </div>
              </div>
              <div className="profil w-10 rounded-full">
                <img src={me} alt="profile_photo" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
