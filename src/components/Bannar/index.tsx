import React from "react";
import Container from "../Shared/Conatiner";
import { SPAN } from "../Typography";
import Sale from "../../assets/Sale.png";
const Bannar = () => {
  return (
    <div>
      <Container className="bg-[#F1F1F1]">
        <div className="flex justify-between items-center align-middle p-10 mb-[96px]">
          <div className="flex flex-col justify-start items-start">
            <SPAN className="font-bold text-3xl">Manicure Monday 💅</SPAN>
            <SPAN className="text-[#17505C] font-thin">
              On select providers
            </SPAN>
          </div>
          <div>
            <img src={Sale} alt="20% sale" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bannar;
