import Container from "../../Shared/Conatiner";
import bannar from "../../../assets/bannar.png";

const Bannar = () => {
  return (
    <div>
      <Container className="bg-[#F1F1F1]">
        <div className="flex justify-between items-center align-middle p-10 mb-[96px]">
          <div>
            <img src={bannar} alt="20% sale" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bannar;
