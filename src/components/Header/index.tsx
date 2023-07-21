import React from "react";

import LeftHeader from "./helper/LeftHeader";
import RightHeader from "./helper/RightHeader";
import Container from "../Shared/Conatiner";
import HeaderBtns from "./helper/HeaderBtns";
import HeaderForm from "./helper/HeaderForm";

const Header = () => {
  const hero = require("../../assets/heroSection.png");

  return (
    <div className="relative h-full w-full ">
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="bg-center absolute h-[650px] w-full"
      >
        <Container>
          <div className="md:flex hidden justify-between items-center">
            <LeftHeader />
            <RightHeader />
          </div>
          <div className="md:hidden">
            <HeaderBtns />
          </div>
        </Container>
        <div className="lg:h-[400px] lg:flex lg:justify-center lg:align-middle">
          <div className="lg:w-[80%] lg:mx-0 lg:my-auto">
            <HeaderForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
