import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { authDataContext } from "../context/authDataContext";
import { toast } from "react-toastify"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios'
import { auth } from "../utils/Firebase.js"
import { UserDataContext } from "../context/userContext.jsx";


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate()
  const {serverUrl} = useContext(authDataContext)
  const {getCurrentUser} = useContext(UserDataContext)
  const navigate = useNavigate()

  const handleSignup = async(e) => {
    e.preventDefault();
   try {
    const result = await axios.post(serverUrl + '/api/auth/signup', {
      name, email,password
    },{withCredentials:true})
    console.log(result.data)
    await getCurrentUser()
    toast.success("Account created successfully!")
    Navigate('/')
   } catch (error) {
    console.log(error)

    toast.error(
      error?.response?.data?.message || "Signup failed"
    )
    
   }
  };

  const handleGoogleAuth = async () => {

     try {
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)

 
    const { data } = await axios.post(`${serverUrl}/api/auth/googleAuth`, {
      name: result.user.displayName,
      email: result.user.email,
    }, { withCredentials: true })

    console.log(data)
    getCurrentUser()
      Navigate('/')
  } catch (error) {
    console.log(error)
  }
}
   
  

  return (
    <div className="h-screen flex items-center justify-center bg-white px-4">

      <div className="w-full max-w-md p-8 rounded-3xl shadow-xl border border-gray-100">

        <h2 className="text-3xl font-bold text-center text-[#FF7A00]">
          Signup
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Create your account
        </p>

        <form onSubmit={handleSignup} className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-[#FF7A00]"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-[#FF7A00]"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-[#FF7A00]"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-[#FF7A00] text-white py-3 rounded-xl font-semibold hover:bg-[#e86f00] transition">
            Create Account
          </button>
          <p className="text-sm text-gray-500 mt-4 text-center">
  Already have an account?{" "}
  <span
    onClick={() => navigate("/login")}
    className="text-[#FF7A00] font-semibold cursor-pointer hover:underline"
  >Login</span></p>

        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <button
          onClick={handleGoogleAuth}
          className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-xl hover:shadow-md transition"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

      </div>

    </div>
  );
};

export default Signup;
