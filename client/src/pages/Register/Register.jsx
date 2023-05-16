import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { ApiContext } from "../../Provider/ApiProvider";
const auth = getAuth(app)
const Register = () => {
  const [error,setError] = useState("")
  const {createUser,logOut} = useContext(AuthContext)
  const { createUserDB} = useContext(ApiContext)
  const navigate = useNavigate()

  const handleRegister =  (e) => {
   e.preventDefault()
   const form = e.target;
   const name = form.name.value;
   const email = form.email.value;
   const photourl = form.photoUrl.value;
   const password = form.password.value;
   const user = {name,email,photourl};
   createUser(email,password)
   .then((result) => {
    console.log(result.user)
    updateUser(name,photourl)
    createUserDB(user)
    logOutUser()
    navigate("/login")
   })
   .catch(error => setError(error.message))
  }

  const updateUser = (name,photUrl) => {
    updateProfile(auth.currentUser, {
      displayName:name, photoURL: photUrl
    }).then(() => {
       console.log("updated Successfulluy")
    }).catch((error) => {
      setError(error.message)
    });
    
  }

  const logOutUser = () => {
    logOut()
  .then(() => {
  })
  .catch(error => console.log(error))
  } 
    return (
        <div className="hero min-h-screen bg-gradient-to-b from-yellow-400 via-orange-400 to-pink-500">
        <div className="w-full flex justify-center">
          <div className="card  w-full max-w-lg shadow-2xl bg-base-100">
          <h1 className="text-center font-bold text-3xl py-5">Registation</h1>
            <div  className="card-body  bg-gray-200">
            <form onSubmit={handleRegister}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name"  required name="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input type="text" placeholder="profile photo url"  required name="photoUrl" className="input input-bordered" />
              </div>
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
              <p className="py-1 text-red-600">{error}</p>
              <p className="mt-2">Already have an account ? <Link to="/login" className="underline">Log in</Link></p>
              <div className="form-control mt-6">
                <button type="submit" className="w-full py-2 bg-amber-300">Register</button>
              </div>
            </form>
            <p className="text-center font-semibold text-md">or login with</p>
            <div className="mt-5 text-gray-200">
                <button className="flex items-center bg-gradient-to-b from-indigo-500 to-purple-500  w-full py-2 rounded-md justify-center"><span className="mr-2"><FaGoogle/></span> Login with Google</button>
                <button className="flex items-center bg-gray-900 w-full py-2  mt-3 rounded-md justify-center"><span className="mr-2"><FaGithub/></span> Login with GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;