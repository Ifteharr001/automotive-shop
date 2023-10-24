import { useLoaderData } from "react-router-dom";
import FordCardes from "./FordCardes";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
const Ford = () => {
  const fordCard = useLoaderData();
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
                  "url(https://i.ibb.co/KKJpb4F/pexels-kindel-media-9799995.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 "></div>
              <div className="hero-content text-left text-neutral-content ">
                <div className="max-w-xl ">
                  <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff4605]">
                    Explore Ford
                  </h1>
                  <p className="mb-5 text-white">
                    Brand known for its commitment to innovation and quality.
                    With a history spanning over a century, Ford continues to
                    set new standards in the automotive industry.
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
                  "url(https://i.ibb.co/whH1C3h/pexels-roberto-lee-cortes-17157308.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 "></div>
              <div className="hero-content text-left text-neutral-content ">
                <div className="max-w-xl ">
                  <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff4605]">
                    Your Road, Your Ford
                  </h1>
                  <p className="mb-5 text-white">
                    Ford is more than just a brand; it a driving companion that
                    stands by you through every journey.
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
                  "url(https://i.ibb.co/LQ5Y40d/pexels-jan-kop-iva-3354648.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 "></div>
              <div className="hero-content text-left text-neutral-content ">
                <div className="max-w-xl ">
                  <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff4605]">
                    The Ford Experience
                  </h1>
                  <p className="mb-5 text-white">
                    Step into a world where innovation and performance go hand
                    in hand. Ford vehicles are designed to deliver a thrilling
                    driving experience
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
      <div className="grid grid-cols-1 md:grid-cols-2 pt-28 lg:grid-cols-3 gap-6 w-[1140px] mx-auto">
        {fordCard
          .filter((ford) => ford.carbrand === "ford")
          .map((ford) => (
            <FordCardes key={ford._id} ford={ford}></FordCardes>
          ))}
      </div>
    </>
  );
};

export default Ford;
