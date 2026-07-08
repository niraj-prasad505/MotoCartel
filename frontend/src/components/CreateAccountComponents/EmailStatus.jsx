import { useState } from "react";
import { Mail } from "lucide-react"
const EMAIL_STATUS = Object.freeze({
  DEFAULT: "default",
  OTP_SENT: "otp_sent",
  VERIFIED: "verified",
  NOT_VERIFIED: "not_verified",
});



export default function Signup(email, onVerified) {
  const [form, setForm] = useState({
    email: email || "",
    otp: "",
  });


  const [emailStatus, setEmailStatus] = useState(EMAIL_STATUS.DEFAULT);

  const handleSendOTP = () => {
    if (!form.email) {
      alert("Please enter your email first.");
      return;
    }
    // i have to create a section in backend to send otp to email and verify it. For now, we will just simulate the process.
    setEmailStatus(EMAIL_STATUS.OTP_SENT);
  };

  const handleVerifyOTP = () => {
    // Dummy verification
    
    if (form.otp === "123456") {
      setEmailStatus(EMAIL_STATUS.VERIFIED);
      onVerified();
    } else {
      setEmailStatus(EMAIL_STATUS.NOT_VERIFIED);
    }
  };

  return (
    <div>
      {/* Default State */}
      {emailStatus === EMAIL_STATUS.DEFAULT && (
        <button
          type="button"
          onClick={handleSendOTP}
          className="flex items-center justify-center h-10 px-4 rounded-lg font-medium text-sm text-white bg-linear-to-r from-orange-500 to-amber-500"
        >
          Send OTP
        </button>
      )}

      {/* OTP Sent */}
      {emailStatus === EMAIL_STATUS.OTP_SENT && (
        <div className="space-y-3">
          <p className="text-xs">
            Your OTP is sent to{" "}
            <span className="text-green-400">{form.email}</span>
          </p>

          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Enter OTP"
              value={form.otp}
              onChange={(e) =>
                setForm({ ...form, otp: e.target.value })
              }
              className="w-45 px-3 py-2 bg-[#0F1623] border border-[#2A3447] rounded-lg outline-none"
            />

            <button
              type="button"
              onClick={handleVerifyOTP}
              className="flex items-center justify-center h-10 px-4 rounded-lg font-medium text-sm text-white bg-linear-to-r from-orange-500 to-amber-500"
            >
              Verify
            </button>
          </div>
        </div>
      )}

      {/* Verified */}
      {emailStatus === EMAIL_STATUS.VERIFIED && (
        <p className="text-green-500 font-medium mt-3">
          ✅ Email Verified
        </p>
      )}

      {/* Not Verified */}
      {emailStatus === EMAIL_STATUS.NOT_VERIFIED && (
        <div className="mt-3 space-y-3">
          <p className="text-red-500 font-medium">
            ❌ Invalid OTP
          </p>

          <button
            onClick={handleSendOTP}
            className="px-4 py-2 rounded-lg bg-orange-500 text-white"
          >
            Resend OTP
          </button>
        </div>
      )}
    </div>
  );
}