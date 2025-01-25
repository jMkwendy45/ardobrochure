import BrandIndex from "../component/brand-index";
import CarGrid from "../component/car-grid/car-grid";
import Hero from "../component/hero-section/Hero";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <CarGrid />
      {/* <BrandIndex/> */}
    </div>
  );
};

export default Home;
