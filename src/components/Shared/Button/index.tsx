import { ButtonProps } from "../../../interfaces/props/IPropsButton";

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`text-sm font-semibold ${props.className} flex items-center justify-center `}
    >
      {props.label}
      {props.children}
    </button>
  );
};

export default Button;
