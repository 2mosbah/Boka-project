import cleaners1 from "../../../assets/cleaners1.png";
import cleaners2 from "../../../assets/cleaners2.png";
import love from "../../../assets/love.png";
import Button from "../../Shared/Button";

const TopCard = () => {
  return (
    <div className="w-full flex relative">
      <img src={cleaners1} alt="haircut" className="w-[176px] h-[172px]" />
      <img src={cleaners2} alt="haircut" className="w-[124px] h-[172px]" />
      <Button type="button">
        <img
          src={love}
          alt="love"
          className="absolute bg-white rounded shadow p-1 top-2 right-2"
        />
      </Button>
    </div>
  );
};

export default TopCard;
