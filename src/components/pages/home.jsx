import React from "react";
import Card from "../card";
import Hero from "../hero";
import OptionMenu from "../optionMenu";
import TabMenu from "../tabmenu";

const Home = () => {
  return (
    <>
      <TabMenu />
      <Hero />
      <OptionMenu />
      <Card />
    </>
  );
};

export default Home;
