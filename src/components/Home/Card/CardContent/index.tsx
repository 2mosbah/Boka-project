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

import classNames from "classnames";

const CardContent = (props: IPropsCard) => {
  const { images, title, price, rating, ...prev } = props;
  const rate = Math.floor(Number(rating) * 10) / 10;

  return (
    <div
      className={classNames(
        "flex flex-col mb-15 gap-5 hover:scale-105 transition-all duration-300 ease-in-out",
        prev.className
      )}
    >
      <div className="!max-w-[344px] flex relative imgsDiv">
        <Button
          type="button"
          className={`prevImg${props.id} hidden prevBtn absolute top-1/2 left-2 z-10`}
          label={
            <IoIosArrowBack className="bg-gray-100 text-xl rounded-md hover:bg-white" />
          }
        />
        <Swiper
          className="max-w-[344px]"
          modules={[Navigation]}
          slidesPerView={2}
          slidesPerGroupAuto
          navigation={{
            nextEl: `.nextImg${props.id}`,
            prevEl: `.prevImg${props.id}`,
            enabled: true,
          }}
        >
          {images.map((img: any, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.imageUrl}
                alt="haircut"
                className="w-[176px] h-[172px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Button
          type="button"
          className={`nextImg${props.id} hidden nextBtn absolute top-1/2 right-2 z-10`}
          label={
            <IoIosArrowForward className="bg-gray-100 text-xl rounded-md hover:bg-white" />
          }
        />
        <Button type="button" className="absolute z-10 top-2 right-2 py-1">
          <BiHeart className="hidden heartBtn bg-white rounded text-3xl shadow p-1 hover:text-orange-600 hover:bg-gray-200" />
        </Button>
      </div>
      <div className="flex flex-col items-start !max-w-[344px] p-1">
        <SPAN className="font-semibold">{title}</SPAN>
        <SPAN className="flex items-center gap-1">
          <img src={star} alt="star" className="w-[20px] h-[20px]" />
          {rate}
        </SPAN>
      </div>
      <div className="!max-w-[344px] flex justify-center items-center text-[#FF914D] p-2 rounded-md border border-[#FF914D]">
        <Button type="button" label="Busieness" />
      </div>
      <div>
        <Link
          to={"#"}
          className="!max-w-[344px] flex gap-1 items-center text-sm text-[#17505C]"
        >
          <SlLocationPin />
          <SPAN>{prev.address}</SPAN>
        </Link>
      </div>
      <DropdownList
        selectClassName="p-1 !max-w-[344px] w-full bg-[#FFE6D6] font-semibold border focus:outline-none border-[#FF914D] py-2 rounded"
        options={prev.options?.map((option: any) => option.nameEn)}
      />
      <div className="p-1 flex gap-2 !max-w-[344px]">
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
                className="font-thin !w-24 text-xl  border border-[#A4C1C8] hover:bg-[#FF914D] hover:border-[#FFE6D6] hover:text-white rounded py-2"
                label={times.time + " am"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="p-1 !max-w-[344px] flex justify-between items-center">
        <div>Booked x today</div>
        <div className="flex flex-col items-center justify-center">
          <s className="text-[#17505C]">$29.72</s>
          <div className="font-bold flex gap-2">
            <SPAN>
              {prev.options?.map((option: any, index) =>
                index === 0 ? Math.ceil(option.price) : ""
              )}
            </SPAN>
            <SPAN className="bg-red-600 rounded px-1 text-white">{"20%"}</SPAN>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
