// eslint-disable-next-line react/prop-types
const ToyotaCardes = ({ toyota }) => {
  // eslint-disable-next-line react/prop-types
  const { image, name, description, price } = toyota;

  return (
    <div className="pt-28 ">
      <div className="card  bg-base-100 shadow-xl rounded-none">
        <figure>
          <img className="rounded-lg " src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-[#ff4605]">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-between items-center">
            <p className="text-[#ff4605] font-bold">Price: {price}TK</p>
            <button className="btn bg-transparent text-[#ff4605] font-bold border-b-4 border-t-4 ">
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyotaCardes;
