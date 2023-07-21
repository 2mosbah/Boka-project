import React from "react";

const DropdownList = () => {
  return (
    <div className="relative inline-block">
      <select className="px-2 text-white bg-transparent focus:bg-white focus:text-[#A49C86]  hover:text-[#A49C86] hover:bg-gray-300 focus:outline-none rounded shadow">
        <option value="english">EN</option>
        <option value="arabic">AR</option>
      </select>
    </div>
  );
};

export default DropdownList;
