import { IPropsDropDownList } from "../../../interfaces/props/IPropsDropDownList";

const DropdownList = (props: IPropsDropDownList) => {
  return (
    <select onChange={props.onChange} className={props.selectClassName}>
      {props.options?.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
};

export default DropdownList;
