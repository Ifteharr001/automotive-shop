const AddProduct = () => {
  return (
    <div className="pt-32">
      <h2 className="text-4xl font-bold  text-center ">Add New Product</h2>
      {/* form */}

      <div className="hero">
        <div className="hero-content ">
          <div className="card flex-shrink-0 w-[800px] shadow-2xl  bg-[#ff4605]">
            <form className="card-body grid grid-cols-2">
              {/* form row */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-white font-bold">Name</span>
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
              {/* form row */}
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
                  className="rounded-[100px] bg-transparent border-2 border-white"
                  id="car-brand"
                  name="car-brand"
                >
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="ford">Ford</option>
                  <option value="chevrolet">Chevrolet</option>
                  <option value="bmw">BMW</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-white font-bold">Name</span>
                </label>
                <input
                  type="text"
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
                  placeholder="Brand Name"
                  className="input input-bordered  bg-transparent border-2 border-white rounded-[100px]"
                  required
                />
              </div>
              {/* form row */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-white font-bold">Name</span>
                </label>
                <input
                  type="text"
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
                  placeholder="Brand Name"
                  className="input input-bordered  bg-transparent border-2 border-white rounded-[100px]"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
