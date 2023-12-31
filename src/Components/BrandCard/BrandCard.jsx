import { useEffect, useState } from "react";
import Brand from "./Brand";

const BrandCard = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch("data.json")
          .then((res) => res.json())
          .then((data) => setBrands(data));
    }, [])
    return (
      <div>
        <h1 className="text-center dark:text-white font-bold text-5xl mt-16 mb-12">
          Top <span className="text-[#ff4605]">Car Brands</span> of the Year
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 lg:max-w-[1140px] mx-auto">
          {brands.map((brand) => (
            <Brand key={brand.id} brand={brand}></Brand>
          ))}
        </div>
      </div>
    );
};

export default BrandCard;