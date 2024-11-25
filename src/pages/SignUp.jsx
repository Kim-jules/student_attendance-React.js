import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading
  const [error, setError] = useState(""); // State to manage errors
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setLoading(true); // Set loading state
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(data);

      alert("New User created successfully.");
      // console.log("Sign Up", { username, password });
      navigate("/login");
      // Reset form fields
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error(err);
      setError("Failed to create account. Please try again."); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex items-center justify-start h-[725px]">
      <div className="bg-white p-10 py-20 rounded-2xl shadow-lg mx-10">
        <form onSubmit={handleSubmit}>
          <h1 className="font-jetBrains text-4xl py-5 font-extrabold text-lime-400">
            Sign Up
          </h1>
          {error && <p className="text-red-500">{error}</p>}{" "}
          {/* Display error message */}
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Enter your username"
              className="w-[400px] p-4 rounded-xl font-jetBrains border-none bg-slate-200/50"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-[400px] p-4 rounded-xl font-jetBrains border-none bg-slate-200/50"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-[400px] p-4 rounded-xl font-jetBrains border-none bg-slate-200/50"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />
            <button
              type="submit"
              className={`bg-lime-400 text-white font-jetBrains font-bold p-4 rounded-xl w-[400px] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Disable button while loading
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
          <div className="sign_in_link py-10">
            <p>
              Already have an account?{" "}
              <NavLink
                to="/login"
                className={`text-blue-800 underline font-jetBrains`}
              >
                Log In
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
