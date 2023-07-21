import React from "react";
import { IPropsInput } from "../../../interfaces/props/IPropsInput";

const Input = (props: IPropsInput) => {
  const { type, className, id, placeholder, value } = props;
  return (
    <input
      type={type}
      className={className}
      id={id}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
