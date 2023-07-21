import SMIcons from "../SocialMediaIcons";
import { SPAN } from "../../../Typography";
import Logo from "../../../../assets/Logo.png";
import { Link } from "react-router-dom";

const LeftHeader = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <SMIcons />
        <SPAN className="text-white mx-1 cursor-pointer">+1 123 456 9845</SPAN>
      </div>
      <Link to={"/"}>
        <img src={Logo} alt="logo" className="w-[50%] h-[36px] my-5" />
      </Link>
    </div>
  );
};

export default LeftHeader;
