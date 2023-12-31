import { IPropsConatiner } from "../../../interfaces/props/IPropsConatiner";

const Container = (props: IPropsConatiner) => {
  return (
    <div
      className={
        props.className +
        " container md:mx-6 md:pt-2 md:mb-3 md:px-0 max-w-[1300px]"
      }
    >
      {props.children}
    </div>
  );
};

export default Container;
