import Button from "../../../Shared/Button";
import Input from "../../../Shared/Input";
import Label from "../../../Shared/Label";
import { Body, H1 } from "../../Typography";

import { FiCalendar, FiClock, FiSearch } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const HeaderForm = () => {
  return (
    <>
      <div className="hidden md:flex items-center mx-2 font-semibold flex-col justify-center align-middle text-center">
        <div className="hidden flex-col md:flex text-center my-2 text-white lg:w-full md:w-[70%] lg:justify-center">
          <Body className="hidden lg:block font-thin tracking-widest">
            Your style booking specialist
          </Body>
          <H1 className="text-4xl">
            Clothes mean nothing until someone lives in them.
          </H1>
        </div>
      </div>
      <form>
        <div className="flex items-center mx-2 font-semibold flex-col lg:flex-row justify-center text-[#02323D]">
          <div className="lg:bg-white lg:h-[70px] lg:rounded lg:shadow lg:mx-2 lg:w-[45%] lg:flex-row w-full md:flex md:flex-col md:items-center">
            <div className="flex justify-between lg:p-2 lg:flex-col items-center p-4 my-2 rounded shadow align-middle w-full md:w-[70%] lg:shadow-none bg-white">
              <div className="lg:flex lg:items-center lg:gap-2 lg:align-middle lg:mr-4">
                <Input
                  type="checkbox"
                  className="mr-2 accent-[#FF914D] w-4 h-4 rounded"
                  id="atHome"
                />
                <Label htmlFor="atHome">At Home</Label>
              </div>
              <div className="border-r border-gray-300 h-6 my-2 md:my-0 lg:hidden"></div>
              <div className="lg:flex lg:items-center lg:gap-2 lg:align-middle">
                <Input
                  type="checkbox"
                  className="mr-2 accent-[#FF914D] w-4 h-4 rounded"
                  id="atBusiness"
                />
                <Label htmlFor="atBusiness">At Business</Label>
              </div>
            </div>
            <div className="hidden lg:block border-r border-gray-300 h-6 my-2 md:my-0"></div>
            {/* Buttons */}
            <div className="flex justify-between items-center lg:shadow-none p-4 my-2 md:my-1 rounded shadow align-middle w-full md:w-[70%] bg-white">
              <div className="flex gap-2">
                <Button
                  type="button"
                  label={<FiCalendar />}
                  className="text-lg"
                />
                <Body>Today</Body>
              </div>
              <div className="border-r mr-6 border-gray-300 h-6 lg:mx-2 my-2 md:my-1"></div>
              <div className="flex gap-2">
                <Button type="button" label={<FiClock />} className="text-lg" />
                <Body>Now</Body>
              </div>
            </div>
            <div className="hidden lg:block border-r border-gray-300 h-6 my-2 md:my-0"></div>
            <div className="bg-white lg:px-2 lg:py-0 my-2 lg:my-0 md:my-1 w-full md:w-[70%] lg:h-[62px] h-[80px] px-4 py-2 rounded-md flex items-center">
              <span>
                <HiLocationMarker className="text-lg" />
              </span>
              <Input
                type="text"
                className="px-2 py-2 bg-white focus:outline-none w-full md:w-[70%]"
                placeholder="Location"
              />
            </div>
          </div>
          <div className="bg-white lg:w-[30%] lg:h-[70px] w-full md:w-[70%] my-2 md:my-1 px-4 py-2 rounded-md flex items-center">
            <span>
              <FiSearch className="text-lg" />
            </span>
            <Input
              type="text"
              className="px-2 py-2 bg-white focus:outline-none w-full md:w-[70%]"
              placeholder="Location, service, keyword"
            />
          </div>
          <Button
            className="flex lg:h-[70px] lg:w-[10%] lg:mx-2 p-4 my-2 md:my-1 bg-[#FF914D] rounded shadow align-middle w-full md:w-[70%] hover:bg-white hover:border hover:border-[#FF914D] hover:text-[#FF914D]"
            type="submit"
            label="Search"
          />
        </div>
      </form>
      <div className="text-white flex flex-col items-center lg:flex-row lg:gap-2 lg:justify-center">
        <Body>It looks like you're in PS. Not correct?</Body>
        <div className="flex space-x-2 hover:font-bold">
          <Button
            className="text-lg text-[#FF914D] "
            type="button"
            label={<SlLocationPin />}
          />
          <Link to={"#"} className="text-[#FF914D]">
            Get current location
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderForm;
