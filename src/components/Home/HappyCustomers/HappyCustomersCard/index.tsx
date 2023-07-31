import Container from "../../../Shared/Conatiner";
import { Body, H1, SPAN } from "../../Typography";
import { IPropsHappyCard } from "../../../../interfaces/props/IPropsHappyCard";

const HappyCustomersCard = (props: IPropsHappyCard) => {
  const { id, body, logo, name, stars, ...rest } = props;

  return (
    <div
      className={
        rest.ParentClassName +
        " flex flex-col md:w-full my-10 gap-5 justify-between bg-[#F9F9F9] p-4"
      }
    >
      <div>
        <Body className="text-[#17505C] w-[250px]">{body}</Body>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-1">
          {stars?.map((star) => (
            <img src={star} alt="star" className="h-[16px] w-[16px]" />
          ))}
        </div>
        <SPAN className="text-[#17505C]">{rest.authorName}</SPAN>
      </div>
      <div className="flex justify-start gap-2 w-full ">
        <img src={logo} alt="logo" className="h-[45px] w-[45px]" />
        <div className="flex flex-col">
          <SPAN className="font-bold">{name}</SPAN>
          <SPAN className="text-[#6B7C80]">{rest.location}</SPAN>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomersCard;
