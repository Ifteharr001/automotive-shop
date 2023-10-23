import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateCard = () => {
  const card = useLoaderData();
  const { _id, brand, image, name, description, price, rating } = card;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const image = form.image.value;
    const carbrand = form.carbrand.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const UpdatedProduct = {
      name,
      brand,
      image,
      carbrand,
      price,
      description,
      rating,
    };
    console.log(UpdatedProduct);

    fetch(
      ` https://automotive-shop-server-lv7b0u6sx-ifteharr001.vercel.app/card/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UpdatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div>
      <div className="pt-32">
        <h2 className="text-4xl font-bold  text-center ">
          Update Product: {name}
        </h2>
        {/* form */}

        <div className="hero">
          <div className="hero-content ">
            <div className="card flex-shrink-0 w-[800px] shadow-2xl  bg-[#ff4605]">
              <form onSubmit={handleUpdateProduct} className="card-body ">
                <div className="grid grid-cols-2 gap-6">
                  {/* form row / name and brand name*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      defaultValue={name}
                      className="input input-bordered  bg-transparent border-2 border-white rounded-[100px]"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Brand Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="brand"
                      defaultValue={brand}
                      placeholder="Brand Name"
                      className="input input-bordered  bg-transparent border-2 border-white rounded-[100px]"
                      required
                    />
                  </div>
                  {/* form row / image url and selected brand*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Image URL
                      </span>
                    </label>
                    <input
                      type="text"
                      name="image"
                      defaultValue={image}
                      placeholder="Image URL"
                      className="input input-bordered  bg-transparent border-2 border-white rounded-[100px]"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Select Brand
                      </span>
                    </label>
                    <select
                      className="rounded-[100px] bg-transparent border-2  h-[46px] border-white"
                      id="car-brand"
                      name="carbrand"
                    >
                      <option value="toyota">Toyota</option>
                      <option value="honda">Honda</option>
                      <option value="ford">Ford</option>
                      <option value="tesla">Tesla</option>
                      <option value="bmw">BMW</option>
                      <option value="Mercedes-Benz">Mercedes-Benz</option>
                    </select>
                  </div>
                  {/* form row / price and short description */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Price
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Price"
                      name="price"
                      defaultValue={price}
                      className="input input-bordered  bg-transparent border-2 border-white rounded-[100px]"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Short Description
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Short Description"
                      name="description"
                      defaultValue={description}
                      className="input input-bordered  bg-transparent border-2 border-white rounded-[100px]"
                      required
                    />
                  </div>
                </div>
                {/* form row / rating and add button*/}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white font-bold">
                      Rating
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Rating"
                    name="rating"
                    defaultValue={rating}
                    className="input input-bordered  bg-transparent border-2 border-white rounded-[100px]"
                    required
                  />
                </div>
                <input
                  className="btn btn-block rounded-[100px] bg-[#000000] border-none text-white mt-8"
                  type="submit"
                  value="Update Product"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCard;
