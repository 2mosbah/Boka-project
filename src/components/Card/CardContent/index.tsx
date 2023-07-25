import React from "react";
import { SPAN } from "../../Typography";
import star from "../../../assets/star.png";
import Button from "../../Shared/Button";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import TopCard from "../TopCard";

const CardContent = () => {
  return (
    <div className="flex flex-col mb-15 gap-5 hover:scale-105 transition-all duration-300 ease-in-out">
      <TopCard />
      <div className="flex gap-5 items-center">
        <SPAN className="font-semibold">Hair X Pression Un Hair Salons</SPAN>
        <SPAN className="flex items-center gap-1">
          <img src={star} alt="star" className="w-[20px] h-[20px]" /> 4.5
        </SPAN>
      </div>
      <div className="flex gap-2 items-center align-middle justify-between">
        <Button
          type="button"
          className="bg-[#FFE6D6] border w-1/2 border-[#FF914D] hover:bg-[#FF914D] hover:border-[#FFE6D6] hover:text-white rounded py-2"
          label="Studio"
        />
        <Button
          type="button"
          className="bg-[#FFE6D6] border w-1/2 border-[#FF914D] hover:bg-[#FF914D] hover:border-[#FFE6D6] hover:text-white rounded py-2"
          label="Home"
        />
      </div>
      <div>
        <Link to={"#"} className="flex gap-1 items-center text-[#17505C]">
          <SlLocationPin />
          <SPAN>Avalaible in Mutliple address, Pick time</SPAN>
        </Link>
      </div>
      <select className="w-full bg-[#FFE6D6] font-semibold border focus:outline-none border-[#FF914D] py-2 rounded">
        <option value="Manicure">Manicure</option>
        <option value="Face">Face</option>
        <option value="Treatment">Treatment</option>
        <option value="Makeup">Makeup</option>
      </select>
      <div className="flex gap-2">
        <Button
          type="button"
          className="font-thin text-xl bg-[#FFE6D6] border w-1/3 border-[#FF914D] hover:bg-[#FF914D] hover:border-[#FFE6D6] hover:text-white rounded py-2"
          label="8:00 am"
        />
        <Button
          type="button"
          className="font-thin text-xl w-1/3 hover:bg-[#FF914D] hover:border-[#FFE6D6] hover:text-white rounded py-2"
          label="8:15 am"
        />
        <Button
          type="button"
          className="font-thin text-xl w-1/3 hover:bg-[#FF914D] hover:border-[#FFE6D6] hover:text-white rounded py-2"
          label="8:30 am"
        />
      </div>
      <div className="w-full flex justify-between items-center">
        <div>Booked x today</div>
        <div className="flex flex-col items-center justify-center">
          <div className="line-through text-[#17505C]">$31.99</div>
          <div className="font-bold flex gap-2">
            <SPAN>$29.22</SPAN>
            <SPAN className="bg-red-600 rounded px-1 text-white">20%</SPAN>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
