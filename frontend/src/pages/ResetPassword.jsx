import React from 'react'
import { useParams } from 'react-router-dom';


import { resetPassword } from "../services/authService";

export default function ResetPassword() {
  const { token } = useParams();

  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await resetPassword(
        token,
        password,
        confirmPassword
      );

      console.log(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button type="submit">
        Reset Password
      </button>
    </form>
  );
}
