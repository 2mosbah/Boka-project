export interface ButtonProps {
  className?: string;
  onClick?: any;
  label?: string | React.ReactNode;
  children?: any;
  type: "button" | "submit" | "reset";
}
