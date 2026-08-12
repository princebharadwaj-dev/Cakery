import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate() 
  const {serverUrl} = useContext(authDataContext)
  const {adminData,getAdmin} = useContext(adminDataContext)

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const result = await axios.post(
      serverUrl + "/api/auth/adminlogin",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    console.log(result.data);
    toast.success("Login successfully!");
    await getAdmin()
    navigate("/");
  } catch (error) {
    console.log(error);

    toast.error(
      error?.response?.data?.message || "Login failed"
    );
  }
};

  return (
   
    <div className="h-screen flex items-center justify-center bg-white px-4">

      <div className="w-full max-w-md p-8 rounded-3xl shadow-xl border border-gray-100">

        <h2 className="text-3xl font-bold text-center text-[#FF7A00]">
          Admin Login
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Welcome back! Please login to continue
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

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
            Login
          </button>
        
        </form>


      </div>

    </div>
   
  );
};

export default Login;
