import { Body, SPAN } from "../../../Typography";
import DropdownList from "../dropDownList";
import { Link } from "react-router-dom";
import HeaderBtns from "../HeaderBtns";

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
          <DropdownList />
        </Body>
      </div>
      <HeaderBtns />
    </div>
  );
};

export default RightHeader;
