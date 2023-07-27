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
    <div>
      <Header />
      <ClassifactionSlider />
      <Bannar />
      <TypesCard id="a" />
      <HappyCustomers />
      <Brands />
      <PopularCategories />
      <BeforeAfter />
      <Footer />
    </div>
  );
}

export default App;
