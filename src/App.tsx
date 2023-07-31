import Bannar from "./components/Home/Bannar";
import BeforeAfter from "./components/Home/BeforeAfter";
import Brands from "./components/Home/Brands";
import TypesCard from "./components/Home/Card";
import Footer from "./components/Home/Footer";
import HappyCustomers from "./components/Home/HappyCustomers";
import Header from "./components/Home/Header";
import PopularCategories from "./components/Home/PopularCategories";
import ClassifactionSlider from "./components/Home/Slider";

function App() {
  return (
    // className="flex flex-col justify-center items-center"
    <div>
      <Header />
      <ClassifactionSlider id={1} />
      <Bannar />
      <TypesCard id={2234} header={"Special offer"} />
      <TypesCard id={3412} header={"Featured Businesses"} />
      <TypesCard id={4123} header={"Popular Businesses"} />
      <TypesCard id={4513} header={"Hair Salon's"} />
      <BeforeAfter />
      <PopularCategories />
      <HappyCustomers id={5} />
      <Brands />
      <TypesCard id={4651} header={"Exploring Businesses"} />
      <TypesCard id={4156} header={"More Businesses"} />
      <Footer />
    </div>
  );
}

export default App;
