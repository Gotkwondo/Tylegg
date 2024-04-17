import React from "react";
import Header from "components/Header/Header";
import HomeIntroduce from "components/Home/HomeIntroduce";
import TyleArea from "components/Home/TyleArea";
import useWindowSizeCustom from "hooks/useWindowsSize";
import Wheel from "components/Home/Wheel";

//Home페이지
const Home = () => {
  const windowSize = useWindowSizeCustom();
  return (
    <div className="Home">
      <Header />
      <HomeIntroduce windowWidth={windowSize.width} />

      <Wheel windowWidth={windowSize.width}></Wheel>
      <TyleArea windowWidth={windowSize.width} />
    </div>
  );
};

export default Home;
