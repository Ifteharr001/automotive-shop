
const Banner = () => {
    return (
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/LkJDL6n/car-1.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="text-left">
              <h1 className="mb-5 leading-[80px] text-white text-6xl font-bold">
                Welcome to GearGrove Autos <br /> Car Dealer
              </h1>

              <button className="btn hover:bg-[#81391e] bg-[#ff4605] border-none text-white font-bold">
                See Our Latest Cars
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;