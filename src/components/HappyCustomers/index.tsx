import React from "react";
import Container from "../Shared/Conatiner";
import { Body, H1, SPAN } from "../Typography";
import star from "../../assets/star.png";
import starHalf from "../../assets/starHalf.svg";
import avatar from "../../assets/avatar.png";

const HappyCustomers = () => {
  return (
    <Container>
      <div className="flex flex-col items-center my-16">
        <H1 className="font-bold text-2xl">Our happy customers say about us</H1>
        <div className="flex flex-col md:w-full my-10 gap-5 justify-between bg-[#F9F9F9] p-4">
          <div>
            <Body className="text-[#17505C] w-[250px]">
              “Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do
              eius mod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam...”
            </Body>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-1">
              <img src={star} alt="star" className="w-[20px] h-[20px]" />
              <img src={star} alt="star" className="w-[20px] h-[20px]" />
              <img src={star} alt="star" className="w-[20px] h-[20px]" />
              <img src={star} alt="star" className="w-[20px] h-[20px]" />
              <img
                src={starHalf}
                alt="half star"
                className="w-[20px] h-[20px]"
              />
            </div>
            <SPAN className="text-[#17505C]">- Jack Daniels</SPAN>
          </div>
          <div className="flex justify-start gap-2 w-full">
            <img src={avatar} alt="avatar" className="h-[45px] w-[45px]" />
            <div className="flex flex-col">
              <SPAN className="font-bold">Anup Kanti Deb</SPAN>
              <SPAN className="text-[#6B7C80]">Sylhet, Bangladesh</SPAN>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HappyCustomers;
