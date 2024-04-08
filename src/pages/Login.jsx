import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the login page", location)
    const handleLogin = e =>{
        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        signIn(email, password)
        .then(result =>{
          console.log(result.user)
          navigate(location?.state? location.state : '/')
        })
        .catch(error =>{
          console.log(error)
        })
    }
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl text-center">Please Login</h2>
      <div>
        <form  onSubmit={handleLogin} className="card-body card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-center mt-4">Do not have an account?Please <Link className="text-blue-700 font-bold" to="/register">Register</Link></p>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
