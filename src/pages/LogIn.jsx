import React from "react";
import { useState } from "react";
import image4 from "../assets/images/4.png";
import { NavLink, useNavigate } from "react-router-dom";

const LogIn = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      if (result.user._id) {
        navigate("/dashboard");
        const user = JSON.stringify(result.user);
        localStorage.setItem("user", user);
        localStorage.setItem("token", result.token)
        onLogin();
        setError("");
      } else {
        setError("Login Failed.");
      }
    } catch (error) {
      setError("Invalid username or password");
    }
  };
  return (
    <div className="flex items-center justify-start h-[725px]">
      <div className="bg-white p-10 py-20 rounded-2xl shadow-lg mx-10">
        <form action="" onSubmit={handleSubmit}>
          <h1 className="font-jetBrains text-4xl py-5 font-extrabold text-lime-400">
            Login
          </h1>
          {error && <p className="text-red-500">{error}</p>}{" "}
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Enter your username"
              className="w-[400px] p-4 rounded-xl font-jetBrains border-none bg-slate-200/50"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-[400px] p-4 rounded-xl font-jetBrains border-none bg-slate-200/50"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className={`bg-lime-400 text-white font-jetBrains font-bold p-4 rounded-xl w-[400px] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Disable button while loading
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </div>
          <div className="sign_up_link py-10">
            <p>
              Already have an account?{" "}
              <NavLink
                to="/signup"
                className={`text-blue-800 underline font-jetBrains`}
              >
                Sign Up
              </NavLink>
            </p>
          </div>
        </form>
      </div>
      <div className="img flex items-center justify-center ml-96">
        <img src={image4} className="" alt="" />
      </div>
    </div>
  );
};

export default LogIn;
