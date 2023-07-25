import React from "react";
import { SPAN } from "../Typography";
import IPropsPopularImage from "../../interfaces/props/IPropsPopularImage";
import Button from "../Shared/Button";
import { BsArrowRight } from "react-icons/bs";
import "./style.css";

const PopularImage = (props: IPropsPopularImage) => {
  return (
    <div className="relative popularImage hover:scale-105">
      <img src={props.imgSrc} alt={props.imgSrc} />
      <div className="absolute bottom-4 left-4 text-white flex flex-col">
        <SPAN className="font-semibold text-2xl">{props.name}</SPAN>
        <SPAN className="font-thin">{props.subName}</SPAN>
      </div>
      <div className="hidden arrowDiv absolute bottom-4 right-4 text-white flex-col">
        <Button
          type="button"
          className="font-bold text-xl p-2 bg-[#FF914D] rounded-full"
          label={<BsArrowRight />}
        ></Button>
      </div>
    </div>
  );
};

export default PopularImage;
