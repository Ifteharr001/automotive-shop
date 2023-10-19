import Banner from "../../Components/Banner/Banner";
import BrandCard from "../../Components/BrandCard/BrandCard";
import ShopCar from "../../Components/ShopCar/ShopCar";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <Banner></Banner>
      </div>
      <BrandCard></BrandCard>
      <ShopCar></ShopCar>
    </div>
  );
};

export default Home;
