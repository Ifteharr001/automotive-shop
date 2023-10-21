import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
const MercedesBenz = () => {
  return (
    <div>
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
                  "url(https://i.ibb.co/cXJL0d5/pexels-mike-bird-217326.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 "></div>
              <div className="hero-content text-left text-neutral-content ">
                <div className="max-w-xl ">
                  <h1 className="mb-5 text-5xl font-bold text-[#ff4605]">
                    Mercedes-Benz is the brand
                  </h1>
                  <p className="mb-5 text-white">
                    The iconic three-pointed star, offers a range of vehicles
                    that empower you to stand out and embrace the road with
                    confidence.
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
                  "url(https://i.ibb.co/wr40f4z/pexels-mike-bird-193991.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 "></div>
              <div className="hero-content text-left text-neutral-content ">
                <div className="max-w-xl ">
                  <h1 className="mb-5 text-5xl font-bold text-[#ff4605]">
                    Mercedes-Benz is synonymous
                  </h1>
                  <p className="mb-5 text-white">
                    Mobility to intelligent safety features, our commitment to
                    excellence ensures you always at the forefront of automotive
                    technology.
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
                  "url(https://i.ibb.co/pxjn9Bg/pexels-mike-bird-112452.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 "></div>
              <div className="hero-content text-left text-neutral-content ">
                <div className="max-w-xl ">
                  <h1 className="mb-5 text-5xl font-bold text-[#ff4605]">
                    Elegance in Motion
                  </h1>
                  <p className="mb-5 text-white">
                    Experience the epitome of luxury and performance with
                    Mercedes-Benz. Our vehicles are crafted with precision
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
      <h3>Mercedes-Benz</h3>
    </div>
  );
};

export default MercedesBenz;
