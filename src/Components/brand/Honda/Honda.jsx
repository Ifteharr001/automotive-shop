import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom"
import HondaCardes from "./HondaCardes";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
const Honda = () => {

    const hondaCard = useLoaderData();
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
                    "url(https://i.ibb.co/LrChxsC/pexels-sebastian-pichard-9503685.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60 "></div>
                <div className="hero-content text-left text-neutral-content ">
                  <div className="max-w-xl ">
                    <h1 className="mb-5 text-5xl font-bold text-[#ff4605]">
                      Unleash Innovation with Honda
                    </h1>
                    <p className="mb-5 text-white">
                      Explore the world of Honda, where innovation meets
                      excellence. Discover a range of vehicles that redefine
                      performance, reliability, and advanced technology.
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
                    "url(https://i.ibb.co/1q2zrm9/pexels-6128308.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60 "></div>
                <div className="hero-content text-left text-neutral-content ">
                  <div className="max-w-xl ">
                    <h1 className="mb-5 text-5xl font-bold text-[#ff4605]">
                      Driving Tomorrow Technology
                    </h1>
                    <p className="mb-5 text-white">
                      Honda is at the forefront of automotive innovation.
                      Experience cutting-edge technology, eco-friendly
                      solutions, and bold designs.
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
                    "url(https://i.ibb.co/fqgQx1D/pexels-srjosebaez-10041065.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60 "></div>
                <div className="hero-content text-left text-neutral-content ">
                  <div className="max-w-xl ">
                    <h1 className="mb-5 text-5xl font-bold text-[#ff4605]">
                      Elevate Your Journey with Honda
                    </h1>
                    <p className="mb-5 text-white">
                      Elevate every journey with a Honda. Find the perfect
                      balance of style, performance, and safety.
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
          {hondaCard
            .filter((honda) => honda.carbrand === "honda")
            .map((honda) => (
              <HondaCardes key={honda._id} honda={honda}></HondaCardes>
            ))}
        </div>
      </>
    );
};

export default Honda;