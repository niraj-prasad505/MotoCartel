import { useEffect, useState } from "react";

const EMAIL_STATUS = Object.freeze({
  DEFAULT: "default",
  OTP_SENT: "otp_sent",
  VERIFIED: "verified",
  NOT_VERIFIED: "not_verified",
});

export default function EmailVerification({
  email,
  onVerified,
}) {
  const [otp, setOtp] = useState("");
  const [emailStatus, setEmailStatus] = useState(
    EMAIL_STATUS.DEFAULT
  );

  // Reset if user changes email
  useEffect(() => {
    setOtp("");
    setEmailStatus(EMAIL_STATUS.DEFAULT);
  }, [email]);

  const handleSendOTP = async () => {
    if (!email) {
      alert("Please enter your email first.");
      return;
    }

    try {
      // Backend API
      // await sendOTP(email);

      console.log("OTP sent to:", email);

      setEmailStatus(EMAIL_STATUS.OTP_SENT);
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP");
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }

    try {
      // Backend API
      // const res = await verifyOTP(email, otp);

      // Dummy verification
      if (otp === "123456") {
        setEmailStatus(EMAIL_STATUS.VERIFIED);
        onVerified(true);
      } else {
        setEmailStatus(EMAIL_STATUS.NOT_VERIFIED);
        onVerified(false);
      }
    } catch (err) {
      console.error(err);
      setEmailStatus(EMAIL_STATUS.NOT_VERIFIED);
      onVerified(false);
    }
  };

  return (
    <div className="space-y-3">
      {emailStatus === EMAIL_STATUS.DEFAULT && (
        <button
          type="button"
          onClick={handleSendOTP}
          className="px-4 py-2 rounded-lg bg-orange-500 text-white"
        >
          Send OTP
        </button>
      )}

      {emailStatus === EMAIL_STATUS.OTP_SENT && (
        <>
          <p className="text-sm">
            OTP sent to <span className="text-green-500">{email}</span>
          </p>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border rounded-lg px-3 py-2"
            />

            <button
              type="button"
              onClick={handleVerifyOTP}
              className="px-4 py-2 rounded-lg bg-orange-500 text-white"
            >
              Verify
            </button>
          </div>
        </>
      )}

      {emailStatus === EMAIL_STATUS.VERIFIED && (
        <p className="text-green-600 font-medium">
          Email Verified
        </p>
      )}

      {emailStatus === EMAIL_STATUS.NOT_VERIFIED && (
        <>
          <p className="text-red-500">
            Invalid OTP
          </p>

          <button
            type="button"
            onClick={handleSendOTP}
            className="px-4 py-2 rounded-lg bg-orange-500 text-white"
          >
            Resend OTP
          </button>
        </>
      )}
    </div>
  );
}