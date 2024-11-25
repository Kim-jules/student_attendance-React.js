import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import React from "react";

const AuthRoutes = ({ handleLogin }) => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LogIn onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Redirect to login if no specific route is matched */}
        <Route path="/" element={<LogIn onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
};

export default AuthRoutes;
