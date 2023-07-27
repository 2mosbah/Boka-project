import { Body, SPAN } from "../../Typography";
import DropdownList from "../../../Shared/dropDownList";
import HeaderBtns from "../HeaderBtns";

import { Link } from "react-router-dom";

const RightHeader = () => {
  return (
    <div className="flex flex-col text-white">
      <div className="flex gap-7">
        <Link to={"/"}>
          <Body>For Busiensses</Body>
        </Link>
        <SPAN>|</SPAN>
        <Link to={"/"}>
          <Body>Help</Body>
        </Link>
        <SPAN>|</SPAN>
        <Body>
          <DropdownList
            selectClassName="px-2 text-white bg-transparent focus:bg-white focus:text-[#A49C86]  hover:text-[#A49C86] hover:bg-gray-300 focus:outline-none rounded shadow"
            options={["EN", "AR"]}
          />
        </Body>
      </div>
      <HeaderBtns />
    </div>
  );
};

export default RightHeader;
