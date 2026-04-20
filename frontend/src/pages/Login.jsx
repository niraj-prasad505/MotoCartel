import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginimg from "../assets/loginassets/loginjpg.jpeg";
import google from "../assets/loginassets/google.png";
import { Lock, Eye, Mail } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    navigate("/");
  };

  return (
    <div className="h-screen bg-[#12151C] flex justify-center items-center p-6">
      <div className="h-full flex w-full max-w-5xl">

        {/* LEFT SIDE (IMAGE) */}
        <div className="w-1/2 hidden md:block bg-[#040404] border border-white/10 rounded-l-xl shadow-lg overflow-hidden">
          <img
            src={loginimg}
            alt="login visual"
            className="w-full h-full object-contain"
          />
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="w-full md:w-1/2 flex items-center justify-center text-white bg-[#121826] border border-white/10 rounded-r-xl shadow-lg">
          <form
            onSubmit={handleSubmit}
            className="w-3/4 max-w-sm flex flex-col gap-4"
          >
            <div className="mb-4">
              <h1 className="text-3xl font-bold">Welcome 👋</h1>
              <p className="text-gray-500 text-sm">
                Login to continue to your account.
              </p>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm mb-1 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-3 py-2 rounded bg-gray-800 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2 rounded bg-gray-800 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer" />
              </div>
            </div>

            {/* FORGOT PASSWORD */}
            <div className="flex justify-end">
              <a href="#" className="text-sm text-orange-400">
                Forgot password?
              </a>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="p-2 bg-orange-500 hover:bg-orange-600 rounded mt-2"
            >
              Login
            </button>

            {/* OR DIVIDER */}
            <div className="flex items-center my-2">
              <div className="flex-1 h-px bg-gray-600"></div>
              <span className="px-3 text-gray-400 text-sm">
                or continue with
              </span>
              <div className="flex-1 h-px bg-gray-600"></div>
            </div>

            {/* GOOGLE BUTTON (optional UI) */}
            <button className="w-full flex items-center justify-center gap-3 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition">

              <img
                src={google}   // your image path
                alt="google"
                className="w-5 h-5"
              />

              <span>Continue with Google</span>

            </button>

            {/* CREATE ACCOUNT */}
            <p className="text-center text-gray-400 text-sm">
              Don’t have an account?{" "}
              <span className="text-orange-400 cursor-pointer">
                Create Account
              </span>
            </p>

            {/* SKIP BUTTON */}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="p-2 bg-gray-600 hover:bg-gray-700 rounded"
            >
              Skip & Go Home
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}