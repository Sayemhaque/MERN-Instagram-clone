import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-b from-yellow-400 via-orange-400 to-pink-500">
        <div className="w-full flex justify-center">
          <div className="card  w-full max-w-lg shadow-2xl bg-base-100">
          <h1 className="text-center font-bold text-3xl py-5">Login</h1>
            <div  className="card-body rounded-xl  bg-gray-200">
            <form >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="Enter your Email" required name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" required name="password" className="input input-bordered" />
              </div>
              {/* <p className="py-1 text-red-600">{error}</p> */}
              <p className="mt-2">Dont't have an account ? <Link to="/register" className="underline">Register</Link></p>
              <div className="form-control mt-6">
                <button type="submit" className="w-full py-2 bg-amber-400 rounded-md">Register</button>
              </div>
            </form>
            <p className="text-center font-semibold text-md">or login with</p>
            <div className="mt-5 text-gray-200">
                <button className="flex items-center bg-gradient-to-b from-indigo-500 to-purple-500 w-full py-2 rounded-md justify-center" ><span className="mr-2"><FaGoogle/></span> Login with Google</button>
                <button className="flex items-center bg-gray-900 w-full py-2  mt-3 rounded-md justify-center" ><span className="mr-2"><FaGithub/></span> Login with GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;