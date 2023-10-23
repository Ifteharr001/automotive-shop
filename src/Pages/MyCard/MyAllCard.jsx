import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const MyAllCard = ({ card, setDelet, cards }) => {
  const { _id } = card;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          ` https://automotive-shop-server-lv7b0u6sx-ifteharr001.vercel.app/userCard/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "This Product Has Been Deleted", "Success");
              // eslint-disable-next-line react/prop-types
              const remaining = cards.filter((car) => car?._id !== _id);
              setDelet(remaining);
            }
          });
      }
    });
  };
  return (
    <>
      <div className="pt-28 ">
        <div className="card  bg-base-100 shadow-xl h-[500px] rounded-none">
          <figure>
            <img className="rounded-lg " src={card.detail.image} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-[#ff4605]">
              {card.detail.name}
            </h2>
            <p>{card.detail.description}</p>
            <p className="font-bold">Rating: {card.detail.rating}</p>
            <div className="flex justify-between items-center">
              <p className="text-[#ff4605] font-bold">
                Price: {card.detail.price}TK
              </p>
            </div>
            <Link
              onClick={() => handleDelete(_id)}
              className="btn  bg-[#ff4605] hover:bg-[#81391e] text-white font-bold border-none "
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAllCard;
