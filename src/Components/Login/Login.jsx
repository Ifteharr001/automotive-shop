import { Link } from "react-router-dom"
const Login = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content grid grid-flow-row">
            <h1 className="text-3xl font-bold text-center mt-20">
              Login Account
            </h1>
            <div className="card flex-shrink-0 w-[400px] shadow-2xl bg-[#ff4605]">
              <form className="card-body">
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-white font-bold">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
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
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#000000] border-none text-white">
                    Login
                  </button>
                </div>
                <p className="text-white">
                  Do not have account, Please{" "}
                  <Link to="/register">
                    <span className="text-blue-700 font-bold">Register</span>
                  </Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;