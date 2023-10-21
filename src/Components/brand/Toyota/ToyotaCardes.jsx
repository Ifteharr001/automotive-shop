import { Link } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const ToyotaCardes = ({ toyota }) => {
  // eslint-disable-next-line react/prop-types
  const {_id, image, name, description, price, rating } = toyota;

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
            <Link
              to={`/updateCard/${_id}`}
              className="btn bg-transparent text-[#ff4605] font-bold border-b-4 border-t-4 "
            >
              Update
            </Link>
          </div>
          <Link
            to={`/details/${_id}`}
            className="btn  bg-[#ff4605] hover:bg-[#81391e] text-white font-bold border-none "
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyotaCardes;
