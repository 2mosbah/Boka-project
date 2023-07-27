import manicure from "../../../assets/manicure.jpeg";
import pedicure from "../../../assets/pedicure.png";
import ivtherap from "../../../assets/ivtherap.png";
import trimming from "../../../assets/trimming.png";
import haircut from "../../../assets/haircut.png";

import Container from "../../Shared/Conatiner";
import PopularImage from "./PopularImage";

const PopularCategories = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row my-24 items-center gap-6">
        <PopularImage
          imgSrc={manicure}
          name="Manicure"
          subName="243+ Business"
        />
        <div className="grid grid-cols-2 grid-rows-2 gap-8">
          <PopularImage imgSrc={pedicure} name="Pedicure" />
          <PopularImage imgSrc={ivtherap} name="IV Therap" />
          <PopularImage imgSrc={trimming} name="Trimming" />
          <PopularImage imgSrc={haircut} name="Haircut" />
        </div>
      </div>
    </Container>
  );
};

export default PopularCategories;
