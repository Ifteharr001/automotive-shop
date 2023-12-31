import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [show, setShow] = useState(false)
    const { createUser, googleProvider } = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const registerUser = { email, password, name, photo }
        console.log(registerUser)
        setRegisterError("");
        setSuccess("");
        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters')
            return;
        } else if(!/[A-Z]/.test(password)){
            setRegisterError('Do not have a capital letter')
            return;
        } else if(!/[#?!@$%^&*-]/.test(password)){
            setRegisterError("Do not have a spacial character");
            return;
        }

        

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            setSuccess('User Created Successfully')
        })
        .catch(error => {
            console.log(error)
            setRegisterError('ERROR: Email Already Used')
        })
    }

    const handleGoogleRegister = () => {
      googleProvider()
        .then((result) => {
          console.log(result.user);
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-flow-row ">
          <h1 className="text-3xl font-bold text-center mt-20">
            Create New Account
          </h1>
          <div className="card flex-shrink-0 lg:w-[400px] shadow-2xl bg-[#ff4605]">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-white font-bold">Name</span>
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
                <label className="label ">
                  <span className="label-text text-white font-bold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered  bg-transparent border-2 border-white rounded-[100px]"
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
                  className="input input-bordered  bg-transparent border-2 border-white rounded-[100px]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={ show ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full bg-transparent border-2 border-white rounded-[100px]"
                    required
                  />
                  <span onClick={() => setShow(!show)} className="absolute top-4 right-3">{
                    show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }</span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#000000] rounded-[100px] border-none text-white">
                  Register
                </button>
              </div>
              <div className="form-control mt-3">
                <button onClick={handleGoogleRegister} className="btn bg-[#000000] rounded-[100px] border-none text-white">
                  Register with google
                </button>
              </div>
              {registerError && (
                <p className="text-red-900 font-bold">{registerError}</p>
              )}
              {success && <p className="text-green-700 font-bold">{success}</p>}
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
