import { Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
  const {createUser} = useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)
        
        // createUser:

        createUser(email, password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error =>{
          console.log(error)
        })
    }
    return (
        <div>
             <Navbar></Navbar>
      <h2 className="text-3xl text-center">Please Register</h2>
      <div>
        <form  onSubmit={handleRegister} className="card-body card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
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
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="text-center mt-4">Already have an account?Please <Link className="text-blue-700 font-bold" to="/login">Login</Link></p>
        </form>
        
      </div>
        </div>
    );
};

export default Register;