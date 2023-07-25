export interface ButtonProps {
  className?: string;
  onClick?: (event: MouseEvent) => {};
  label?: string | React.ReactNode;
  children?: any;
  type: "button" | "submit" | "reset";
}
