import star from "../../../../assets/star.png";

import { SPAN } from "../../Typography";
import Button from "../../../Shared/Button";
import { IPropsCard } from "../../../../interfaces/props/IPropsCard";
import DropdownList from "../../../Shared/dropDownList";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { BiHeart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

const CardContent = (props: IPropsCard) => {
  const { images, title, price, rating, ...prev } = props;
  const [isChoice, setIsChoice] = useState<"home" | "studio">("home");
  const handleOnClick = () => {
    if (isChoice === "home") {
      setIsChoice("studio");
    } else {
      setIsChoice("home");
    }
  };
  return (
    <div className="flex flex-col mb-15 gap-5 hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="w-full flex relative imgsDiv">
        <Button
          type="button"
          className={`prevImg hidden prevBtn absolute top-1/2 left-2 z-10`}
          label={
            <IoIosArrowBack className="bg-gray-100 text-xl rounded-md hover:bg-white" />
          }
        />
        <Swiper
          className="max-w-[344px] py-2"
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={2}
          slidesPerGroupAuto
          navigation={{
            nextEl: `.nextImg`,
            prevEl: `.prevImg`,
            enabled: true,
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index + 10153}>
              <img src={img} alt="haircut" className="w-[176px] h-[172px]" />
            </SwiperSlide>
          ))}
        </Swiper>

        <Button
          type="button"
          className={`nextImg hidden nextBtn absolute top-1/2 right-2 z-10`}
          label={
            <IoIosArrowForward className="bg-gray-100 text-xl rounded-md hover:bg-white" />
          }
        />
        <Button type="button" className="absolute z-10  top-2 right-2 py-1">
          <BiHeart className="hidden heartBtn bg-white rounded text-3xl shadow p-1 hover:text-orange-600 hover:bg-gray-200" />
        </Button>
      </div>
      <div className="flex gap-5 items-center">
        <SPAN className="font-semibold">{title}</SPAN>
        <SPAN className="flex items-center gap-1">
          <img src={star} alt="star" className="w-[20px] h-[20px]" />
          {rating}
        </SPAN>
      </div>
      <div className="flex gap-2 items-center align-middle justify-between">
        <button
          onClick={handleOnClick}
          type="button"
          className={
            "w-1/2 rounded py-2" +
            {
              "bg-[#FFE6D6] border rounded-lg border-orange-400":
                isChoice === "studio",
            }
          }
        >
          Studio
        </button>
        <button
          onClick={handleOnClick}
          type="button"
          className={
            "w-1/2 rounded py-2" +
            {
              "bg-[#FFE6D6] border rounded-lg border-orange-400":
                isChoice === "home",
            }
          }
        >
          Home
        </button>
      </div>
      <div>
        <Link to={"#"} className="flex gap-1 items-center text-[#17505C]">
          <SlLocationPin />
          <SPAN>Avalaible in Mutliple address, Pick time</SPAN>
        </Link>
      </div>
      <DropdownList
        selectClassName="w-full bg-[#FFE6D6] font-semibold border focus:outline-none border-[#FF914D] py-2 rounded"
        options={prev.options}
      />
      <div className="flex gap-2">
        <Swiper
          className="max-w-[344px]"
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={3}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
            enabled: true,
          }}
        >
          {prev.time?.map((times, index) => (
            <SwiperSlide key={index}>
              <Button
                key={times.id}
                type="button"
                className="font-thin w-[100px] text-xl bg-[#FFE6D6] border border-[#FF914D] hover:bg-[#FF914D] hover:border-[#FFE6D6] hover:text-white rounded py-2"
                label={times.time + " am"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex justify-between items-center">
        <div>Booked x today</div>
        <div className="flex flex-col items-center justify-center">
          <div className="line-through text-[#17505C]">{price?.curPrice}</div>
          <div className="font-bold flex gap-2">
            <SPAN>{price?.prevPrice}</SPAN>
            <SPAN className="bg-red-600 rounded px-1 text-white">
              {price?.salePercentage}
            </SPAN>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
