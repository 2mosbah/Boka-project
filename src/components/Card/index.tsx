import React from "react";
import Container from "../Shared/Conatiner";

import CardContent from "./CardContent";
import SubTitle from "../Shared/SubTitle";
import Button from "../Shared/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TypesCard = () => {
  return (
    <Container>
      <SubTitle
        heading="Special offer"
        label="view all"
        children={
          <div className="flex gap-1 items-center">
            <Button
              type="button"
              className="prev text-2xl"
              label={<IoIosArrowBack className="text-4xl" />}
            />
            <Button
              type="button"
              className="next text-2xl"
              label={<IoIosArrowForward className="text-4xl" />}
            />
          </div>
        }
      />
      <div className="flex gap-4 items-center justify-between rounded border border-[#EDF3F4]">
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
      </div>
    </Container>
  );
};

export default TypesCard;
