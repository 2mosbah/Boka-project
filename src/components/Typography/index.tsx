import React from "react";
import IPropsTypography from "../../interfaces/props/IPropsTypography";

export const H1 = ({ children, className }: IPropsTypography) => {
  return <h1 className={className}>{children}</h1>;
};
export const H2 = ({ children, className }: IPropsTypography) => {
  return <h2 className={className}>{children}</h2>;
};
export const H3 = ({ children, className }: IPropsTypography) => {
  return <h3 className={className}>{children}</h3>;
};
export const H4 = ({ children, className }: IPropsTypography) => {
  return <h4 className={className}>{children}</h4>;
};
export const H5 = ({ children, className }: IPropsTypography) => {
  return <h5 className={className}>{children}</h5>;
};
export const H6 = ({ children, className }: IPropsTypography) => {
  return <h6 className={className}>{children}</h6>;
};
export const Body = ({ children, className }: IPropsTypography) => {
  return <p className={className}>{children}</p>;
};
export const SPAN = ({ children, className }: IPropsTypography) => {
  return <span className={className}>{children}</span>;
};
