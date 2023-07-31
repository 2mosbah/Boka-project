import avatar from "../../../assets/avatar.png";

import Container from "../../Shared/Conatiner";
import SubTitle from "../../Shared/SubTitle";

import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { Body, SPAN } from "../Typography";
import { FIRST_IMAGE, SECOND_IMAGE } from "../../../constants/BeforeAfter";

const BeforeAfter = () => {
  return (
    <Container>
      <SubTitle
        heading="Boka Transformation"
        label="Book Now"
        buttonClassName="border border-[#FF914D] text-[#FF914D] rounded-md px-4 py-2 hover:bg-[#FF914D] hover:text-white"
      />
      <div className="md:flex-row flex flex-col gap-10">
        <div className="md:w-[50%] w-full relative">
          <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
          />
          <SPAN className="absolute left-4 text-3xl bottom-4 z-30 font-bold">
            Before
          </SPAN>
          <SPAN className="absolute right-4 text-3xl top-4 z-30 font-bold">
            After
          </SPAN>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center align-middle">
          <div className="flex flex-col gap-4 justify-between align-middle">
            <div>
              <Body className="text-[#17505C] w-[250px]">
                “Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
                do eius mod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam...”
              </Body>
            </div>
            <div className="flex justify-start gap-2 w-full">
              <img src={avatar} alt="avatar" className="h-[45px] w-[45px]" />
              <div className="flex flex-col">
                <SPAN className="font-bold">Anup Kanti Deb</SPAN>
                <SPAN className="text-[#6B7C80]">Sylhet, Bangladesh</SPAN>
              </div>
            </div>
            <div>
              <SPAN className="text-[#FF914D] cursor-pointer">
                Book Shoukri for $49
              </SPAN>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BeforeAfter;
