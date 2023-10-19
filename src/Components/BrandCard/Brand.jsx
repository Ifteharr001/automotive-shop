import {Link} from "react-router-dom"
// eslint-disable-next-line react/prop-types
const Brand = ({ brand }) => {
    // eslint-disable-next-line react/prop-types
    const { brandName, image } = brand;
  return (
    <div>
      <Link to={`/brand/${brandName}`}>
        <div className="card  shadow-xl image-full  h-[250px]">
        <figure>
          <img src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-[#ff4605]">{brandName}</h2>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Brand;