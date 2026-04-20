import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginimg from "../assets/loginassets/loginjpg.jpeg";
import google from "../assets/loginassets/google.png";
import { Lock, Eye, Mail, User } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    navigate("/login");
  };

  return (
    <div className="h-screen bg-[#0B0F17] flex justify-center items-center p-6">
      <div className="h-full flex w-full max-w-5xl">

        {/* LEFT SIDE */}
        <div className="w-1/2 hidden md:block bg-[#040404] border border-[#2A3447] rounded-l-xl overflow-hidden">
          <img
            src={loginimg}
            alt="visual"
            className="w-full h-full object-contain opacity-80"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-[#121826] border border-[#2A3447] rounded-r-xl text-white">
          
          <form
            onSubmit={handleSubmit}
            className="w-3/4 max-w-sm flex flex-col gap-4"
          >
            {/* HEADER */}
            <div className="mb-4">
              <h1 className="text-3xl font-bold">
                Create Your Account 🚀
              </h1>
              <p className="text-gray-400 text-sm">
                Sign up to start your journey with premium gear
              </p>
            </div>

            {/* NAME */}
            <div>
              <label className="text-sm mb-1 block">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 bg-[#0F1623] border border-[#2A3447] rounded-lg outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm mb-1 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 bg-[#0F1623] border border-[#2A3447] rounded-lg outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm mb-1 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-2 bg-[#0F1623] border border-[#2A3447] rounded-lg outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
                <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer" />
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-sm mb-1 block">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-2 bg-[#0F1623] border border-[#2A3447] rounded-lg outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="mt-2 py-2 rounded-lg bg-linear-to-r from-[#FF6A00] to-[#FF8A3D] hover:opacity-90 transition shadow-[0_0_20px_rgba(255,106,0,0.3)]"
            >
              Create Account
            </button>

            {/* DIVIDER */}
            <div className="flex items-center my-2">
              <div className="flex-1 h-px bg-[#2A3447]"></div>
              <span className="px-3 text-gray-500 text-sm">
                or continue with
              </span>
              <div className="flex-1 h-px bg-[#2A3447]"></div>
            </div>

            {/* GOOGLE */}
            <button className="w-full flex items-center justify-center gap-3 bg-[#0F1623] border border-[#2A3447] py-2 rounded-lg hover:bg-[#1A2233] transition">
              <img src={google} alt="google" className="w-5 h-5" />
              <span>Continue with Google</span>
            </button>

            {/* LOGIN LINK */}
            <p className="text-center text-gray-400 text-sm">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-orange-400 cursor-pointer"
              >
                Login
              </span>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}