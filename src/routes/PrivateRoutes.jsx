import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoutes = ({ component: Component }) => {
  const { token } = useAuth();
  return token ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
