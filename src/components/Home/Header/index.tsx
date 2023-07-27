import Container from "../../Shared/Conatiner";
import HeaderBtns from "./HeaderBtns";
import HeaderForm from "./HeaderForm";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

const Header = () => {
  const hero = require("../../../assets/heroSection.png");

  return (
    <div className="h-full w-full m-0 p-0">
      <div
        style={{
          backgroundImage: `url(${hero})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="bg-center h-[650px] w-full"
      >
        <Container>
          <div className="md:flex hidden justify-between items-center">
            <LeftHeader />
            <RightHeader />
          </div>
          <div className="md:hidden">
            <HeaderBtns />
          </div>
        </Container>
        <div className="lg:h-[400px] lg:flex lg:justify-center lg:align-middle">
          <div className="lg:w-[80%] lg:mx-0 lg:my-auto max-w-[1100px]">
            <HeaderForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
