import React from "react";
import { IPropsConatiner } from "../../../interfaces/props/IPropsConatiner";

const Container = ({ children, className }: IPropsConatiner) => {
  return (
    <div className={className + "container mx-6 my-3 px-0"}>{children}</div>
  );
};

export default Container;
