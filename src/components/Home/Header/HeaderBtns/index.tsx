import Button from "../../../Shared/Button";

const HeaderBtns = () => {
  return (
    <div className="flex flex-row-reverse gap-4">
      <Button
        className="my-5 w-[120px] p-[10px] hover:text-[#FF914D] bg-transparent rounded border border-stone-200 text-white"
        type="submit"
        label="Login"
      />
      <Button
        className="my-5 w-[120px] p-[10px] hover:bg-[#FF914D] hover:text-white bg-white rounded text-[#FF914D]"
        type="submit"
        label="Sign Up"
      />
    </div>
  );
};

export default HeaderBtns;
