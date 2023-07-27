import Button from "../Button";
import { H1 } from "../../Home/Typography";
import { IPropsSubTitle } from "../../../interfaces/props/IPropsSubTitle";

const SubTitle = (props: IPropsSubTitle) => {
  return (
    <div className="flex justify-between font-bold text-[#02323D] text-3xl mb-5 items-center">
      <H1>{props.heading} </H1>
      <div className="flex gap-3">
        <Button
          className={props.buttonClassName + " text-[#FF914D]"}
          type="submit"
          label={props.label}
        />
        {props.children}
      </div>
    </div>
  );
};

export default SubTitle;
