import React from "react";
import ralphs from "../../assets/ralphs.png";
import smartFinal from "../../assets/smartFinal.png";
import foorless from "../../assets/foorless.png";
import vons from "../../assets/vons.png";
import walmart from "../../assets/walmart.png";

const Brands = () => {
  return (
    <div className="w-full p-10 gap-5 bg-[#E3ECEE] flex items-center lg:justify-center lg:gap-[40px] justify-around h-[185px] my-20">
      <div className="flex flex-col gap-3 lg:gap-5 lg:flex-row">
        <img src={walmart} alt="walmart" />
        <img src={ralphs} alt="ralphs" />
      </div>
      <div className="flex flex-col gap-3 lg:gap-5 lg:flex-row">
        <img src={smartFinal} alt="smartFinal" />
        <img src={foorless} alt="foorless" />
      </div>
      <div className="flex flex-col">
        <img src={vons} alt="vons" />
      </div>
    </div>
  );
};

export default Brands;
