
// eslint-disable-next-line react/prop-types
const FordCardes = ({ford}) => {
    // eslint-disable-next-line react/prop-types
  const { image, name, description, price, rating } = ford;
  return (
    <div className="pt-28 ">
      <div className="card  bg-base-100 shadow-xl h-[500px] rounded-none">
        <figure>
          <img className="rounded-lg " src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-[#ff4605]">{name}</h2>
          <p>{description}</p>
          <p className="font-bold">Rating: {rating}</p>
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

export default FordCardes;