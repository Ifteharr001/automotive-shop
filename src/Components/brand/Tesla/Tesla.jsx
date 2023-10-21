import { useLoaderData } from "react-router-dom";
import TeslaCardes from "./teslaCardes";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
const Tesla = () => {
    const teslaCard = useLoaderData();
    return (
      <>
        <div>
          <Swiper
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
          >
            <SwiperSlide>
              <div
                className="hero h-[90vh]"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/Yp9016F/pexels-ayyeee-ayyeee-18611668.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60 "></div>
                <div className="hero-content text-left text-neutral-content ">
                  <div className="max-w-xl ">
                    <h1 className="mb-5 text-5xl font-bold text-[#ff4605]">
                      Tesla Leading the Charge
                    </h1>
                    <p className="mb-5 text-white">
                      Experience the power of sustainable mobility with our
                      lineup of electric cars.
                    </p>
                    <Link to="/">
                      <button className="btn bg-[#ff4605] hover:bg-[#81391e] text-white font-bold border-none">
                        Visit Home
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="hero h-[90vh]"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/yqwHjX3/pexels-yehor-andrukhovych-11531019.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60 "></div>
                <div className="hero-content text-left text-neutral-content ">
                  <div className="max-w-xl ">
                    <h1 className="mb-5 text-5xl font-bold text-[#ff4605]">
                      Tesla Premium Electric Fleet
                    </h1>
                    <p className="mb-5 text-white">
                      Elevate your daily commute or weekend adventures with
                      Tesla premium electric vehicles.
                    </p>
                    <Link to="/">
                      <button className="btn bg-[#ff4605] hover:bg-[#81391e] text-white font-bold border-none">
                        Visit Home
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="hero h-[90vh]"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/4wyLP2c/pexels-matt-weissinger-11139552.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60 "></div>
                <div className="hero-content text-left text-neutral-content ">
                  <div className="max-w-xl ">
                    <h1 className="mb-5 text-5xl font-bold text-[#ff4605]">
                      Innovate the Way You Drive with Tesla
                    </h1>
                    <p className="mb-5 text-white">
                      Discover the future of automotive technology with Tesla.
                      Our electric vehicles offer cutting-edge features,
                      eco-friendly performance
                    </p>
                    <Link to="/">
                      <button className="btn bg-[#ff4605] hover:bg-[#81391e] text-white font-bold border-none">
                        Visit Home
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
        <div className="grid grid-cols-3 gap-6 w-[1140px] mx-auto">
          {teslaCard
            .filter((tesla) => tesla.carbrand === "tesla")
            .map((tesla) => (
              <TeslaCardes key={tesla._id} tesla={tesla}></TeslaCardes>
            ))}
        </div>
      </>
    );
};

export default Tesla;