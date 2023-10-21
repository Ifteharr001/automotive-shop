import { useLoaderData } from "react-router-dom";

import BmwCardes from "./BmwCardes";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
const Bmw = () => {
  const bmwCard = useLoaderData();
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
                  "url(https://i.ibb.co/Y08c1W6/pexels-mike-bird-170811.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 "></div>
              <div className="hero-content text-left text-neutral-content ">
                <div className="max-w-xl ">
                  <h1 className="mb-5 text-5xl font-bold text-[#ff4605]">
                    The Ultimate Driving Experience
                  </h1>
                  <p className="mb-5 text-white">
                    BMW has redefined the art of driving. With a rich history of
                    engineering excellence and a commitment to innovation
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
                  "url(https://i.ibb.co/NNbzj6R/pexels-maria-geller-2127039.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 "></div>
              <div className="hero-content text-left text-neutral-content ">
                <div className="max-w-xl ">
                  <h1 className="mb-5 text-5xl font-bold text-[#ff4605]">
                    Innovate the Future with BMW
                  </h1>
                  <p className="mb-5 text-white">
                    BMW dedication to sustainable mobility is reshaping the
                    future. With a growing lineup of electric and hybrid
                    vehicles, BMW is at the forefront of eco-conscious driving
                    without compromising the exhilaration.
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
                  "url(https://i.ibb.co/DRqQySG/pexels-dan-ro-14764071.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 "></div>
              <div className="hero-content text-left text-neutral-content ">
                <div className="max-w-xl ">
                  <h1 className="mb-5 text-5xl font-bold text-[#ff4605]">
                    Elegance Meets Performance
                  </h1>
                  <p className="mb-5 text-white">
                    BMW is synonymous with a perfect fusion of elegance and
                    high-performance engineering. Each BMW vehicle embodies the
                    brand legacy of luxury
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
        {bmwCard
          .filter((bmw) => bmw.carbrand === "bmw")
          .map((bmw) => (
            <BmwCardes key={bmw._id} bmw={bmw}></BmwCardes>
          ))}
      </div>
    </>
  );
};

export default Bmw;
