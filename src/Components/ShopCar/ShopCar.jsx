import { FaTrophy, FaGem, FaPeopleGroup, FaCalculator } from "react-icons/fa6";
const ShopCar = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <h2 className="text-center font-bold text-5xl mb-8 ">
        Shop, Finance and Buy Your Car
      </h2>
      <p className="text-center w-4/5 mx-auto mb-12">
        Shop, finance, and buy your next car at GearGrove Autos. Experience
        the joy of driving a vehicle that not only meets but exceeds your
        expectations. Your journey to exceptional car ownership begins here.
      </p>

      <div className="grid grid-cols-2 mt-10 gap-8">
        {/* card 1 */}
        <div className="flex">
          <div className="text-4xl text-[#ff4605] mt-10 mr-4 ">
            <FaTrophy />
          </div>
          <div>
            <div>
              <h1 className="text-3xl font-bold text-[#ff4605] mb-4">
                New Specials
              </h1>
            </div>
            <div>
              <p>
                At EcoMotion Cars, we embrace a future where driving is not just
                a passion but a sustainable lifestyle. Explore our collection of
                eco-friendly and electric vehicles that redefine the concept of
                responsible driving.
              </p>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex">
          <div className="text-4xl text-[#ff4605] mt-10 mr-4">
            <FaGem />
          </div>
          <div>
            <div>
              <h1 className="text-3xl font-bold text-[#ff4605] mb-4">
                Used Specials
              </h1>
            </div>
            <div>
              <p>
                Our carefully curated selection of pre-owned vehicles offers the
                perfect blend of reliability and affordability. Each car in our
                Used Specials lineup has undergone rigorous inspection,
              </p>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="flex">
          <div className="text-4xl text-[#ff4605] mt-10 mr-4">
            <FaPeopleGroup />
          </div>
          <div>
            <div>
              <h1 className="text-3xl font-bold text-[#ff4605] mb-4">
                Schedule Service
              </h1>
            </div>
            <div>
              <p>
                At GearGrove Autos, we prioritize your satisfaction and the
                longevity of your vehicle. Schedule your service appointment
                today and experience the convenience of reliable.
              </p>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className="flex">
          <div className="text-4xl text-[#ff4605] mt-10 mr-4">
            <FaCalculator />
          </div>
          <div>
            <div>
              <h1 className="text-3xl font-bold text-[#ff4605] mb-4">
                Value Trade
              </h1>
            </div>
            <div>
              <p>
                Upgrade to your dream car seamlessly with GearGrove Autos Value
                Trade program. We understand that your current vehicle has
                value, and we are here to make the transition to a new ride
                smoother than ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCar;
