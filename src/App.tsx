import ExploringBusinessesSection from "./components/Home/ExploringBusinessesSection";
import Bannar from "./components/Home/Bannar";
import BeforeAfter from "./components/Home/BeforeAfter";
import Brands from "./components/Home/Brands";
import FeaturedBusinessesSection from "./components/Home/FeaturedBusinessesSection";
import Footer from "./components/Home/Footer";
import HairSalonSectoin from "./components/Home/HairSalon'sSectoin";
import HappyCustomers from "./components/Home/HappyCustomers";
import Header from "./components/Home/Header";
import MoreBusinessesSection from "./components/Home/MoreBusinessesSection";
import PopularBusinessesSection from "./components/Home/PopularBusinessesSection";
import PopularCategories from "./components/Home/PopularCategories";
import ClassifactionSlider from "./components/Home/Slider";
import SpecialOfferSection from "./components/Home/SpecialOfferSection";

function App() {
  return (
    // className="flex flex-col justify-center items-center"
    <div>
      <Header />
      <ClassifactionSlider id={1} />
      <Bannar />
      <SpecialOfferSection />
      <FeaturedBusinessesSection />
      <PopularBusinessesSection />
      <HairSalonSectoin />
      <BeforeAfter />
      <PopularCategories />
      <HappyCustomers id={5} />
      <Brands />
      <ExploringBusinessesSection />
      <MoreBusinessesSection />
      <Footer />
    </div>
  );
}

export default App;
