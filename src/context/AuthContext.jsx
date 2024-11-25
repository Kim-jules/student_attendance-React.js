// src/context/AuthContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import AuthService from "../services/AuthServices"; // Import AuthService

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const logIn = async (username, password) => {
    try {
      const userData = await AuthService.login(username, password);
      setUser(userData);
      setToken(localStorage.getItem("token")); // Update token state
    } catch (error) {
      console.error(error);
      throw error; // Re-throw error for handling in component
    }
  };

  const logOut = async () => {
    await AuthService.logout(); // Call logout function in AuthService
    setUser(null);
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ user, token, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const {user, token, logIn, logOut} = useContext
  return useContext(AuthContext);
};