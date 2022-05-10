import React from "react";
import Farm from "../farm/farm";
import Hero from "../hero/hero";
import TabMenu from "../tabmenu/tabmenu";

const Home = () => {
  return (
    <>
      <TabMenu />
      <Hero />
      <Farm />
    </>
  );
};

export default Home;
