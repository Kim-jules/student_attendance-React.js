import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Stock from "./pages/Stock";
import Sales from "./pages/Sales";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }

    const removeToken = () => {
      localStorage.removeItem("token");
    };

    // window.addEventListener("beforeunload", removeToken);

    // if (localStorage.getItem("token")) {
    //   removeToken();
    // }

    // Cleanup event listener on component unmount
    // return () => {
    //   window.removeEventListener("beforeunload", removeToken);
    // };
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="p-5 bg-lime-400/20 font-poppins">
        <div className="sidebar flex">
          {isLoggedIn ? (
            <>
              <SideBar onLogout={handleLogout} />
              <main className="flex-grow">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/stock" element={<Stock />} />
                  <Route path="/sales" element={<Sales />} />
                </Routes>
              </main>
            </>
          ) : (
            <main className="flex-grow flex items-center justify-center">
              <Routes>
                <Route
                  path="/login"
                  element={<LogIn onLogin={handleLogin} />}
                />
                <Route path="/signup" element={<SignUp />} />
                {/* Redirect to login if no specific route is matched */}
                <Route path="/" element={<LogIn onLogin={handleLogin} />} />
              </Routes>
            </main>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
export default App;
