import { Link } from "react-router-dom";
const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name)
    }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-flow-row ">
          <h1 className="text-3xl font-bold text-center mt-20">
            Create New Account
          </h1>
          <div className="card flex-shrink-0 w-[400px] shadow-2xl bg-[#ff4605]">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-white font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-white font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#000000] border-none text-white">
                  Register
                </button>
              </div>
              <p className="text-white">
                Already have an account, Please{" "}
                <Link to="/login">
                  <span className="text-blue-700 font-bold">Login</span>
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
