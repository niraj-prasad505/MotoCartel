import React from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import loginimg from "../assets/loginassets/loginjpg.jpeg";
import { forgotPassword } from "../services/authService";

export default function ForgotPassword() {
  const [email, setEmail] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      await forgotPassword(email);

      setSuccess(true);
      setEmail("");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Failed to send reset link"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#12151C] flex justify-center items-center p-6">
      <div className="flex w-full max-w-5xl min-h-162">

        {/* LEFT SIDE */}
        <div className="w-1/2 hidden md:block bg-[#040404] border border-white/10 rounded-l-xl overflow-hidden">
          <img
            src={loginimg}
            alt="Forgot Password"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex items-center justify-center text-white bg-[#121826] border border-white/10 rounded-xl md:rounded-l-none md:rounded-r-xl">
          <form
            onSubmit={handleSubmit}
            className="w-3/4 max-w-sm flex flex-col gap-4"
          >
            <div>
              <h1 className="text-3xl font-bold">
                Forgot Password?
              </h1>

              <p className="text-gray-400 text-sm mt-2">
                Enter your email address and we'll send you a password reset link.
              </p>
            </div>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="bg-green-500/10 border border-green-500 text-green-400 p-3 rounded text-sm">
                Reset link sent successfully. Check your email.
              </div>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded text-sm">
                {error}
              </div>
            )}

            {/* EMAIL INPUT */}
            <div>
              <label className="block text-sm mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded bg-gray-800 outline-none border border-transparent focus:border-orange-500"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 py-3 rounded font-medium transition"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

            {/* BACK TO LOGIN */}
            <p className="text-center text-sm text-gray-400">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-orange-400 hover:text-orange-300"
              >
                Back to Login
              </Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}