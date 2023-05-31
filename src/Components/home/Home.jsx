import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./header/Header";
import Navbar from "./main/navbar/Navbar";
import Videos from "./main/videos/Videos";
import VideoPlayer from "./main/videoPlayer/VideoPlayer";

const Home = () => {
  const [active, setActive] = useState(true);
  const handleModal = () => {
    setActive(!active);
  };
  return (
    <div className="container max-sm:w-80">
      <Header handleModal={handleModal} />
      <main className="flex">
        <Navbar active={active} />
        <Routes>
          <Route path="/" element={<Videos />}></Route>
          <Route path="/youtube/:id" element={<VideoPlayer />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default Home;
