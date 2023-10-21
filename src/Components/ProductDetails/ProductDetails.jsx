import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
const ProductDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const detail = details.find((detail) => detail._id == id);
  // console.log( detail);
  const { user } = useContext(AuthContext);
  const handleData = () => {
    const email = user.email;
    const detail = details.find((detail) => detail._id == id);
    const cardDetails = {
      
      detail,
      email   
      
    }
    console.log(cardDetails)

    fetch("http://localhost:5000/userCard", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cardDetails),
    })
      .then((res) => res.json())
      .then((data) =>{
        if (data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "Product Added Successfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
        }
      });


  }

  
  return (
    <div>
      <div className="pt-28 w-[1050px] mx-auto ">
        <div className="card  bg-base-100 shadow-xl h-[700px] rounded-none">
          <figure>
            <img className="rounded-lg " src={detail.image} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-[#ff4605]">
              {detail.name}
            </h2>
            <p>{detail.description}</p>
            <p className="font-bold">Rating: {detail.rating}</p>
            <div className="flex justify-between items-center">
              <p className="text-[#ff4605] font-bold">
                Price: {detail.price}TK
              </p>
              <Link
                onClick={handleData}
                className="btn bg-transparent text-[#ff4605] font-bold border-b-4 border-t-4 "
              >
                Add to car
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
