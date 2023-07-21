import React from "react";
import { IPropsLabel } from "../../../interfaces/props/IPropsLabel";

const Label = (props: IPropsLabel) => {
  return (
    <label htmlFor={props.htmlFor} className={props.className}>
      {props.children}
    </label>
  );
};

export default Label;
