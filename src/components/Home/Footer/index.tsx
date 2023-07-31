import logo from "../../../assets/Logo.png";
import paymentCards from "../../../assets/visa.png";
import {
  BUSINESSES,
  DISCOVER,
  FOOTER_PARAGRAPH,
  MORE,
  OPENTABLE,
  OUR_SITES,
} from "../../../constants/FooterTitleConsts";

import Container from "../../Shared/Conatiner";
import { Body, SPAN } from "../Typography";

import { Link } from "react-router-dom";
import FooterSMIcons from "./helper/FooterSMIcons";

const Footer = () => {
  return (
    <div className="bg-[#F9F9F9] mt-24 text-[#6B7C80] px-7 box-border text-sm">
      <Container className="flex flex-col md:flex-row gap-2 justify-around box-border">
        <div className="flex flex-col gap-2 w-[20%]">
          <img src={logo} alt="logo" className="w-32 h-9" />
          <Body>{FOOTER_PARAGRAPH}</Body>
        </div>
        <div className="flex flex-col gap-2 ">
          <SPAN className="font-semibold text-black">Discover</SPAN>
          {DISCOVER.map((discover) => (
            <SPAN className="hover:underline">{discover.subTitle}</SPAN>
          ))}
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col gap-2">
            <SPAN className="font-semibold text-black">More</SPAN>
            {MORE.map((more) => (
              <SPAN className="hover:underline">{more.subTitle}</SPAN>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <SPAN className="font-semibold text-black">OpenTable</SPAN>
            {OPENTABLE.map((openTable) => (
              <SPAN className="hover:underline">{openTable.subTitle}</SPAN>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <SPAN className="font-semibold text-black">Our Sites</SPAN>
          {OUR_SITES.map((ourSites) => (
            <Link to={"/"}>
              <SPAN className="hover:underline">{ourSites.subTitle}</SPAN>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <SPAN className="font-semibold text-black">Businesses</SPAN>
            {BUSINESSES.map((businesses) => (
              <SPAN className="hover:underline">{businesses.subTitle}</SPAN>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <SPAN className="font-semibold text-black">Join Us Now</SPAN>
            <div className="flex gap-2">
              <FooterSMIcons />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="hidden lg:flex justify-between px-7 items-center">
          <div className="flex justify-between items-center gap-2">
            <Link to={"#"}>Privacy Policy</Link>
            <Link to={"#"}>Terms of Use</Link>
            <Link to={"#"}>Cookies and Interest-Based Ads</Link>
            <Link to={"#"}>Do Not Sell</Link>
            <Link to={"#"}>Cookies Settings</Link>
          </div>
          <div>
            <SPAN>Copyright © 2022 Boka, Inc. All rights reserved.</SPAN>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex justify-between px-7 mt-5 items-center">
          <div className="flex justify-between items-center">
            <SPAN className="hidden md:block w-[50%]">
              OpenTable is part of Booking Holdings, the world leader in online
              travel and related services.
            </SPAN>
          </div>
          <div>
            <img src={paymentCards} alt="payment cards" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
