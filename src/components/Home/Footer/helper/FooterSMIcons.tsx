import React from "react";
import { SM_ICONS } from "../../../../constants/FooterTitleConsts";
import { Link } from "react-router-dom";

const FooterSMIcons = () => {
  return (
    <div className="flex gap-5 text-white">
      {SM_ICONS.map((icon) => {
        const Icon = icon.subTitle;
        return (
          <Link to={""}>
            <div key={icon.id} className="text-gray-500 hover:text-black">
              <Icon size={22} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FooterSMIcons;
