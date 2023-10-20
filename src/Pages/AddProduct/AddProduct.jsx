import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const image = form.image.value;
    const carbrand = form.carbrand.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newProduct = {
      name,
      brand,
      image,
      carbrand,
      price,
      description,
      rating,
    };
    console.log(newProduct);

    fetch("http://localhost:5000/card", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "Product Added Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
        }
      });
  };

  return (
    <div className="pt-32">
      <h2 className="text-4xl font-bold  text-center ">Add New Product</h2>
      {/* form */}

      <div className="hero">
        <div className="hero-content ">
          <div className="card flex-shrink-0 w-[800px] shadow-2xl  bg-[#ff4605]">
            <form onSubmit={handleAddProduct} className="card-body ">
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
                  className="input input-bordered  bg-transparent border-2 border-white rounded-[100px]"
                  required
                />
              </div>
              <input
                className="btn btn-block rounded-[100px] bg-[#000000] border-none text-white mt-8"
                type="submit"
                value="Add Product"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
