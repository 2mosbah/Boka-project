export interface ButtonProps {
  className?: string;
  onClick?: (event: MouseEvent) => {};
  label: string | React.ReactNode;
  type: "button" | "submit" | "reset";
}
