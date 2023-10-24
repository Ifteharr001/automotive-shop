import { useLoaderData } from "react-router-dom";
import ToyotaCardes from "./ToyotaCardes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";


const Toyota = () => {

  const toyotaCard = useLoaderData();


  return (
    <>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          loop={true}
        >
          <SwiperSlide>
            <div
              className="hero h-[90vh]"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/x7s164S/pexels-erik-mclean-17507722.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 "></div>
              <div className="hero-content text-left text-neutral-content ">
                <div className="max-w-xl ">
                  <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff4605]">
                    {" "}
                    Driving Innovation
                  </h1>
                  <p className="mb-5 text-white">
                    Explore Toyota, a brand synonymous with groundbreaking
                    technology and sustainable mobility.
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
                  "url(https://i.ibb.co/NSSzxXH/pexels-garvin-st-villier-3874330.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 "></div>
              <div className="hero-content text-left text-neutral-content ">
                <div className="max-w-xl ">
                  <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl  font-bold text-[#ff4605]">
                    {" "}
                    Toyota Epitome of Reliability
                  </h1>
                  <p className="mb-5 text-white">
                    Discover the Toyota Camry, an enduring symbol of dependable
                    performance and elegance. Known for its durability and
                    timeless design, the Camry is a testament to Toyotas
                    commitment to quality
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
                  "url(https://i.ibb.co/9V5MY7z/pexels-garvin-st-villier-3874337.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 "></div>
              <div className="hero-content text-left text-neutral-content ">
                <div className="max-w-xl ">
                  <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl  font-bold text-[#ff4605]">
                    {" "}
                    Toyota Prius Pioneering Hybrid Excellence
                  </h1>
                  <p className="mb-5 text-white">
                    Experience the Toyota Prius, the trailblazer of hybrid
                    technology. With a commitment to reducing emissions and
                    increasing efficiency, the Prius redefines eco-friendly
                    driving without sacrificing style and comfort.
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
      <div className="grid grid-cols-1 md:grid-cols-2 pt-28 lg:grid-cols-3 gap-6 lg:w-[1140px] mx-auto">
        {toyotaCard
          .filter((toyota) => toyota.carbrand === "toyota")
          .map((toyota) => (
            <ToyotaCardes key={toyota._id} toyota={toyota}></ToyotaCardes>
          ))}
      </div>
    </>
  );
};

export default Toyota;
