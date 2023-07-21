import React from "react";
import { SMIconsConsts } from "../../../../constants/socialMediaIcons";
import { Link } from "react-router-dom";

const SMIcons = () => {
  return (
    <div className="flex gap-5 text-white">
      {SMIconsConsts.map((icon) => {
        const Icon = icon.icon;
        return (
          <Link to={icon.url}>
            <div key={icon.id} className="bg-transparent text-white">
              <Icon size={22} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SMIcons;
