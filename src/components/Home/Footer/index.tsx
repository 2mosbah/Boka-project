import logo from "../../../assets/Logo.png";
import paymentCards from "../../../assets/visa.png";

import Container from "../../Shared/Conatiner";
import { Body, SPAN } from "../Typography";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F9F9F9] mt-24 text-[#6B7C80] p-10 text-sm">
      <Container className="flex gap-8 justify-between items-center align-middle">
        <div className="flex flex-col gap-3 w-[20%]">
          <img src={logo} alt="logo" />
          <Body>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            officiis provident praesentium deserunt animi esse rem magnam iure
            aperiam vitae accusati
          </Body>
        </div>
        <div className="flex flex-col gap-2 items-center text-center ">
          <SPAN className="font-semibold text-black">Discover</SPAN>
          <SPAN>About Us</SPAN>
          <SPAN>Dining</SPAN>
          <SPAN>Dining</SPAN>
          <SPAN>Dining</SPAN>
          <SPAN>Dining</SPAN>
        </div>
        <div className="flex flex-col gap-4  items-center">
          <div className="flex flex-col gap-2 items-center text-center">
            <SPAN className="font-semibold text-black">Opetenable</SPAN>
            <SPAN>Dining </SPAN>
            <SPAN>Dining </SPAN>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <SPAN className="font-semibold text-black">More</SPAN>
            <SPAN>Dining </SPAN>
            <SPAN>Dining </SPAN>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <SPAN className="font-semibold text-black">Discover</SPAN>
          <SPAN>Dining </SPAN>
          <SPAN>Dining</SPAN>
          <SPAN>Dining</SPAN>
          <SPAN>Dining</SPAN>
          <SPAN>Dining</SPAN>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-2 items-center text-center">
            <SPAN className="font-semibold text-black">Businesses</SPAN>
            <SPAN>Delight more diners</SPAN>
            <SPAN>Open for Business Blog</SPAN>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <SPAN className="font-semibold text-black">Join Us Now</SPAN>
            <div className="flex gap-4">
              <Link to={"#"}>
                {" "}
                <FaFacebook className="text-[#A4C1C8]" />
              </Link>
              <Link to={"#"}>
                {" "}
                <FaInstagram className="text-[#A4C1C8]" />
              </Link>
              <Link to={"#"}>
                {" "}
                <FaLinkedin className="text-[#A4C1C8]" />
              </Link>
              <Link to={"#"}>
                {" "}
                <FaTwitter className="text-[#A4C1C8]" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="hidden lg:flex justify-between items-center">
          <div className="flex justify-between items-center gap-4">
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
        <div className="flex justify-between mt-5 items-center">
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
