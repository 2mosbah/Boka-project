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

const ClassifactionSlider = () => {
  return (
    <Container>
      <Splide
        className="my-24"
        aria-label="My Favorite Images"
        options={{
          rewind: false,
          perPage: 5,
          perMove: 3,
          gap: 0,
        }}
      >
        {ClassifactionData.map((classify) => {
          return (
            <SplideSlide key={classify.id}>
              <Link
                to={"#"}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={classify.src}
                  className="w-[100px] h-[100px]"
                  alt={classify.alt}
                />
                <Button
                  type="button"
                  label={classify.alt}
                  className="hover:text-orange-500"
                />
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </Container>
  );
};

export default ClassifactionSlider;
