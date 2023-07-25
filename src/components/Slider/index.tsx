import React from "react";
import Container from "../Shared/Conatiner";
import { ClassifactionData } from "../../mock/ClassifcationData";

import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import Button from "../Shared/Button";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ClassifactionSlider = () => {
  return (
    <Container>
      <div className="flex my-20">
        <Button
          type="button"
          className="prev text-2xl"
          label={<IoIosArrowBack className="text-4xl" />}
        />
        <Swiper
          modules={[Navigation]}
          slidesPerView={8}
          spaceBetween={20}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
            enabled: true,
          }}
          slidesPerGroup={1}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            300: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            700: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
            900: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
            1100: {
              slidesPerView: 7,
              spaceBetween: 60,
            },
            1140: {
              slidesPerView: 8,
              spaceBetween: 60,
            },
          }}
        >
          {ClassifactionData.map((classify) => {
            return (
              <SwiperSlide className="!flex flex-col gap-4 justify-center items-center">
                <img src={classify.src} alt="SliderImg" />
                <Button
                  type="button"
                  label={classify.alt}
                  className="hover:text-orange-500"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Button
          type="button"
          className="next text-2xl"
          label={<IoIosArrowForward className="text-4xl" />}
        />
      </div>
    </Container>
  );
};

export default ClassifactionSlider;
