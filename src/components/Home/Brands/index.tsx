import ralphs from "../../../assets/ralphs.png";
import smartFinal from "../../../assets/smartFinal.png";
import foorless from "../../../assets/foorless.png";
import vons from "../../../assets/vons.png";
import walmart from "../../../assets/walmart.png";

const Brands = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 md:flex md:flex-row md:items-center md:justify-evenly p-2 md:h-[185px] flex-col gap-10 bg-[#E3ECEE] my-20">
      <img src={walmart} alt="walmart" className="w-25" />
      <img src={ralphs} alt="ralphs" className="w-25 " />
      <img src={smartFinal} alt="smartFinal" className="w-25 " />
      <img src={foorless} alt="foorless" className="w-25 " />
      <img src={vons} alt="vons" className="w-25 " />
    </div>
  );
};

export default Brands;
