import React from "react";
import Header from "./Header";
import Intro from "./components/Intro";
import HeaderBottom from "./components/HeaderBottom";
import Vd from "./components/Vd";
import ControlledAccordions from "./components/Accordion";

const App = () => {
  return (
    <>
      <div className="w-[100%] border border-red-500 flex flex-col items-end">
        <Header />
        <HeaderBottom />
        <Intro />
        <Vd />
        <ControlledAccordions />
      </div>
    </>
  );
};

export default App;
