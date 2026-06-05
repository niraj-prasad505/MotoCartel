import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';


import { resetPassword } from "../services/authService";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [status, setStatus] = React.useState("idle"); // idle | loading | success | error


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await resetPassword(
        token,
        password,
        confirmPassword
      );
      setStatus("success");

      setTimeout(() => {
        navigate("/login");
      }, 2000);


      console.log(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#12151C] flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-[#121826] border border-white/10 rounded-xl p-8 text-white shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-2">
          Reset Password
        </h1>
        {status === "success" && (
          <div className="bg-green-500/20 border border-green-500 text-green-500 p-4 rounded-lg mb-6">
            Password reset successful!
          </div>
        )}

        <p className="text-gray-400 text-center text-sm mb-6">
          Enter your new password below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-orange-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-orange-500"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-lg font-medium"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
